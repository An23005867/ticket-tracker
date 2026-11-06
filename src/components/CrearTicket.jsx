import { useEffect, useRef, useState } from 'react';
import { crearTicket } from '../services/tickets';
import '../styles/crearTicket.css';

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
const CLAVE_SESION = 'ticket-tracker-solicitud';

function CrearTicket({ tipoEquipo, datosEquipo, categoria, resultado, historial = [], cuestionario, onTicketCreado, onDatosContacto }) {
    const contenedorRef = useRef(null);
    const widgetRef = useRef(null);
    const tokenRef = useRef('');
    const enviandoRef = useRef(false);
    const solicitudRef = useRef(null);

    const [verificado, setVerificado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');
    const [ticket, setTicket] = useState(null);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const detalle = historial.map(item => ({
        pregunta: cuestionario.preguntas[item.pregunta].titulo,
        respuesta: cuestionario.preguntas[item.pregunta].opciones[item.respuesta].texto
    }));

    const datosBase = {
        tipoEquipo,
        marca: datosEquipo.marca,
        modelo: datosEquipo.modelo,
        sistemaOperativo: datosEquipo.sistema,
        componentes: datosEquipo.componentes,
        categoria,
        diagnostico: resultado.titulo,
        descripcion: resultado.descripcion,
        detalle
    };

    const identificadorDiagnostico = JSON.stringify(datosBase);

    useEffect(() => {
        try {
            const guardado = JSON.parse(sessionStorage.getItem(CLAVE_SESION) || 'null');

            if (guardado?.diagnostico === identificadorDiagnostico) {
                solicitudRef.current = guardado;

                if (guardado.ticket) {
                    setTicket(guardado.ticket);
                    setNombre(guardado.nombre || '');
                    setTelefono(guardado.telefono || '');
                    onTicketCreado?.(guardado.ticket);
                    onDatosContacto?.({
                        nombre: guardado.nombre || '',
                        telefono: guardado.telefono || ''
                    });
                }
            }
        } catch {
            sessionStorage.removeItem(CLAVE_SESION);
        }
    }, [identificadorDiagnostico, onTicketCreado, onDatosContacto]);

    useEffect(() => {
        if (ticket) return;

        if (!SITE_KEY) {
            setError('Falta configurar la clave pública de Turnstile.');
            return;
        }

        let activo = true;
        let intervalo;

        function iniciarWidget() {
            if (!activo || !contenedorRef.current || widgetRef.current !== null) return;
            if (!window.turnstile) return;

            widgetRef.current = window.turnstile.render(contenedorRef.current, {
                sitekey: SITE_KEY,
                theme: 'light',
                callback: token => {
                    tokenRef.current = token;
                    setVerificado(true);
                    setError('');
                },
                'expired-callback': () => {
                    tokenRef.current = '';
                    setVerificado(false);
                },
                'error-callback': () => {
                    tokenRef.current = '';
                    setVerificado(false);
                    setError('No se pudo completar la verificación. Intenta nuevamente.');
                }
            });
        }

        if (window.turnstile) {
            iniciarWidget();
        } else {
            const existente = document.querySelector('script[data-turnstile-script]');

            if (!existente) {
                const script = document.createElement('script');
                script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
                script.async = true;
                script.defer = true;
                script.dataset.turnstileScript = 'true';
                document.head.appendChild(script);
            }

            intervalo = window.setInterval(() => {
                if (window.turnstile) {
                    window.clearInterval(intervalo);
                    iniciarWidget();
                }
            }, 200);
        }

        return () => {
            activo = false;
            window.clearInterval(intervalo);

            if (widgetRef.current !== null && window.turnstile) {
                window.turnstile.remove(widgetRef.current);
                widgetRef.current = null;
            }

            tokenRef.current = '';
        };
    }, [ticket]);

    function actualizarContacto(campo, valor) {
        if (campo === 'nombre') setNombre(valor);
        if (campo === 'telefono') setTelefono(valor);

        onDatosContacto?.({
            nombre: campo === 'nombre' ? valor : nombre,
            telefono: campo === 'telefono' ? valor : telefono
        });
    }

    async function registrarTicket() {
        if (!tokenRef.current || enviandoRef.current || ticket) return;

        enviandoRef.current = true;
        setCargando(true);
        setError('');

        const datos = {
            ...datosBase,
            nombreCliente: nombre.trim(),
            telefono: telefono.trim()
        };

        try {
            let solicitud = solicitudRef.current;

            if (
                !solicitud ||
                solicitud.diagnostico !== identificadorDiagnostico ||
                solicitud.nombre !== datos.nombreCliente ||
                solicitud.telefono !== datos.telefono
            ) {
                solicitud = {
                    id: crypto.randomUUID(),
                    diagnostico: identificadorDiagnostico,
                    nombre: datos.nombreCliente,
                    telefono: datos.telefono,
                    ticket: null
                };

                solicitudRef.current = solicitud;
                sessionStorage.setItem(CLAVE_SESION, JSON.stringify(solicitud));
            }

            const respuesta = await crearTicket(datos, tokenRef.current, solicitud.id);

            if (!respuesta.success || !respuesta.ticket) {
                throw new Error('No se recibió la confirmación del ticket.');
            }

            solicitud.ticket = respuesta.ticket;
            sessionStorage.setItem(CLAVE_SESION, JSON.stringify(solicitud));

            setTicket(respuesta.ticket);
            onTicketCreado?.(respuesta.ticket);
        } catch (err) {
            setError(err.message || 'No se pudo registrar el ticket.');
        } finally {
            tokenRef.current = '';
            setVerificado(false);
            setCargando(false);
            enviandoRef.current = false;

            if (widgetRef.current !== null && window.turnstile && !solicitudRef.current?.ticket) {
                window.turnstile.reset(widgetRef.current);
            }
        }
    }

    return (
        <div className="crear-ticket-card">
            <div className="crear-ticket-heading">
                <span className="section-tag">SOPORTE TÉCNICO</span>
                <h2>Crear ticket de soporte</h2>
                <p>Registra tu diagnóstico y recibe un código para consultar el estado de tu solicitud.</p>
            </div>

            {ticket ? (
                <div className="ticket-confirmacion" role="status">
                    <span className="ticket-confirmacion-icon" aria-hidden="true">✓</span>
                    <h3>Ticket creado correctamente</h3>
                    <p>Guarda estos datos para consultar tu solicitud.</p>

                    <div className="ticket-dato">
                        <span>Código de seguimiento</span>
                        <strong>{ticket.codigo}</strong>
                    </div>

                    <div className="ticket-dato">
                        <span>Token privado</span>
                        <code>{ticket.token_seguimiento}</code>
                    </div>

                    <p className="ticket-aviso">
                        El token es privado. No lo compartas públicamente,
                        ya que permite consultar la información del ticket.
                    </p>
                </div>
            ) : (
                <>
                    <div className="whatsapp-fields">
                        <div className="whatsapp-field">
                            <label htmlFor="ticket-nombre">Tu nombre (opcional)</label>
                            <input
                                id="ticket-nombre"
                                type="text"
                                maxLength={80}
                                placeholder="Ej. Juan Pérez"
                                value={nombre}
                                onChange={e => actualizarContacto('nombre', e.target.value)}
                                disabled={cargando}
                            />
                        </div>

                        <div className="whatsapp-field">
                            <label htmlFor="ticket-telefono">Número de contacto (opcional)</label>
                            <input
                                id="ticket-telefono"
                                type="tel"
                                maxLength={20}
                                placeholder="Ej. +502 1234 5678"
                                value={telefono}
                                onChange={e => actualizarContacto('telefono', e.target.value)}
                                disabled={cargando}
                            />
                        </div>
                    </div>

                    <div className="ticket-verificacion" ref={contenedorRef}></div>

                    {error && (
                        <p className="ticket-error" role="alert">{error}</p>
                    )}

                    <button
                        type="button"
                        className="primary-button"
                        onClick={registrarTicket}
                        disabled={!verificado || cargando}
                    >
                        {cargando ? 'Registrando ticket...' : 'Crear ticket de soporte →'}
                    </button>
                </>
            )}
        </div>
    );
}

export default CrearTicket;