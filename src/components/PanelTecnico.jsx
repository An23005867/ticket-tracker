import { useEffect, useState } from 'react';
import { obtenerTickets, actualizarEstadoTicket } from '../services/adminTickets';
import '../styles/panelTecnico.css';

const estados = {
    pendiente: 'Pendiente',
    en_proceso: 'En proceso',
    resuelto: 'Solucionado'
};

function PanelTecnico({ tecnico, salir }) {
    const [tickets, setTickets] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [actualizando, setActualizando] = useState(false);
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');

    async function cargarTickets() {
        setCargando(true);
        setError('');

        try {
            const registros = await obtenerTickets();
            setTickets(registros);
            setSeleccionado((anterior) =>
                anterior ? registros.find((ticket) => ticket.id === anterior.id) || null : null
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setCargando(false);
        }
    }

    useEffect(() => {
        let activo = true;

        obtenerTickets()
            .then((registros) => {
                if (activo) {
                    setTickets(registros);
                    setCargando(false);
                }
            })
            .catch((error) => {
                if (activo) {
                    setError(error.message);
                    setCargando(false);
                }
            });

        return () => { activo = false; };
    }, []);

    async function cambiarEstado(ticket, nuevoEstado) {
        if (actualizando || ticket.estado === nuevoEstado) return;

        setActualizando(true);
        setError('');
        setMensaje('');

        try {
            const actualizado = await actualizarEstadoTicket(ticket.id, nuevoEstado);

            setTickets((anteriores) =>
                anteriores.map((item) =>
                    item.id === ticket.id ? { ...item, ...actualizado } : item
                )
            );

            setSeleccionado((anterior) =>
                anterior?.id === ticket.id ? { ...anterior, ...actualizado } : anterior
            );

            setMensaje(`El ticket ${ticket.codigo} se actualizó correctamente.`);
        } catch (error) {
            setError(error.message);
        } finally {
            setActualizando(false);
        }
    }

    const pendientes = tickets.filter((ticket) => ticket.estado === 'pendiente').length;
    const enProceso = tickets.filter((ticket) => ticket.estado === 'en_proceso').length;
    const solucionados = tickets.filter((ticket) => ticket.estado === 'resuelto').length;

    return (
        <section className="panel-section">
            <div className="panel-encabezado">
                <div>
                    <span className="section-tag">ÁREA ADMINISTRATIVA</span>
                    <h1>Panel de soporte técnico</h1>
                    <p>Administra las solicitudes de diagnóstico registradas.</p>
                    <span className="panel-usuario">Sesión: {tecnico.email}</span>
                </div>

                <button type="button" className="panel-salir" onClick={salir}>
                    Cerrar sesión
                </button>
            </div>

            <div className="panel-resumen">
                <article className="panel-estadistica estadistica-pendiente">
                    <span>Pendientes</span>
                    <strong>{pendientes}</strong>
                </article>

                <article className="panel-estadistica estadistica-proceso">
                    <span>En proceso</span>
                    <strong>{enProceso}</strong>
                </article>

                <article className="panel-estadistica estadistica-resuelto">
                    <span>Solucionados</span>
                    <strong>{solucionados}</strong>
                </article>
            </div>

            <div className="panel-contenido">
                <div className="panel-listado">
                    <div className="panel-listado-header">
                        <h2>Tickets recibidos</h2>

                        <button
                            type="button"
                            className="panel-recargar"
                            onClick={cargarTickets}
                            disabled={cargando}
                        >
                            {cargando ? 'Cargando...' : 'Actualizar lista'}
                        </button>
                    </div>

                    {error && <p className="panel-error" role="alert">{error}</p>}
                    {mensaje && <p className="panel-exito" role="status">{mensaje}</p>}

                    {cargando && <p className="panel-vacio">Cargando solicitudes...</p>}

                    {!cargando && tickets.length === 0 && (
                        <p className="panel-vacio">Todavía no hay tickets registrados.</p>
                    )}

                    {!cargando && tickets.map((ticket) => (
                        <button
                            type="button"
                            key={ticket.id}
                            className={`panel-ticket ${seleccionado?.id === ticket.id ? 'panel-ticket-activo' : ''}`}
                            onClick={() => {
                                setSeleccionado(ticket);
                                setMensaje('');
                            }}
                        >
                            <div className="panel-ticket-superior">
                                <strong>{ticket.codigo}</strong>
                                <span className={`panel-estado estado-${ticket.estado}`}>
                                    {estados[ticket.estado] || ticket.estado}
                                </span>
                            </div>

                            <span>{ticket.nombre_cliente || 'Cliente sin nombre'}</span>
                            <small>{ticket.marca} {ticket.modelo || ''} · {ticket.tipo_equipo}</small>
                        </button>
                    ))}
                </div>

                <div className="panel-detalles">
                    {!seleccionado ? (
                        <div className="panel-sin-seleccion">
                            <span aria-hidden="true">⌕</span>
                            <h2>Detalles del ticket</h2>
                            <p>Selecciona una solicitud para consultar su información.</p>
                        </div>
                    ) : (
                        <>
                            <div className="panel-detalles-header">
                                <div>
                                    <span className="section-tag">SOLICITUD DE SOPORTE</span>
                                    <h2>{seleccionado.codigo}</h2>
                                </div>

                                <span className={`panel-estado estado-${seleccionado.estado}`}>
                                    {estados[seleccionado.estado] || seleccionado.estado}
                                </span>
                            </div>

                            <div className="panel-informacion">
                                <h3>Información del cliente</h3>
                                <p><strong>Nombre:</strong> {seleccionado.nombre_cliente || 'No proporcionado'}</p>
                                <p><strong>Teléfono:</strong> {seleccionado.telefono || 'No proporcionado'}</p>

                                <h3>Información del equipo</h3>
                                <p><strong>Tipo:</strong> {seleccionado.tipo_equipo}</p>
                                <p><strong>Marca:</strong> {seleccionado.marca}</p>
                                <p><strong>Modelo:</strong> {seleccionado.modelo || 'No especificado'}</p>
                                <p><strong>Sistema:</strong> {seleccionado.sistema_operativo || 'No especificado'}</p>
                                <p><strong>Componentes:</strong> {seleccionado.componentes || 'No especificados'}</p>

                                <h3>Diagnóstico</h3>
                                <p><strong>Categoría:</strong> {seleccionado.categoria}</p>
                                <p><strong>Resultado:</strong> {seleccionado.diagnostico}</p>
                                <p><strong>Descripción:</strong> {seleccionado.descripcion || 'No proporcionada'}</p>

                                {Array.isArray(seleccionado.detalle) && seleccionado.detalle.length > 0 && (
                                    <>
                                        <h3>Respuestas del cuestionario</h3>
                                        {seleccionado.detalle.map((item, indice) => (
                                            <div className="panel-respuesta" key={indice}>
                                                <strong>{item.pregunta}</strong>
                                                <p>{item.respuesta}</p>
                                            </div>
                                        ))}
                                    </>
                                )}

                                <h3>Administrar estado</h3>
                                <label htmlFor="estado-ticket">Estado de la solicitud</label>

                                <select
                                    id="estado-ticket"
                                    value={seleccionado.estado}
                                    onChange={(evento) => cambiarEstado(seleccionado, evento.target.value)}
                                    disabled={actualizando}
                                >
                                    <option value="pendiente">Pendiente</option>
                                    <option value="en_proceso">En proceso</option>
                                    <option value="resuelto">Solucionado</option>
                                </select>

                                {actualizando && <p>Guardando cambios...</p>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PanelTecnico;