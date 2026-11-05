
import { useState } from 'react';
import categorias from '../data/categorias';
import '../styles/envioWhatsApp.css';

// Número del técnico: código de país + número, sin espacios ni símbolos.
// Ejemplo de formato: 502XXXXXXXX
const NUMERO_TECNICO = '50236326513';

function EnvioWhatsApp({ tipoEquipo, datosEquipo, categoria, cuestionario, resultado, historial }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const nombreEquipo = tipoEquipo === 'laptop' ? 'Laptop' : 'Computadora de escritorio';
    const nombreCategoria = categorias.find(item => item.id === categoria)?.nombre || categoria;
    const numeroValido = /^\d{8,15}$/.test(NUMERO_TECNICO);

    function generarMensaje() {
        const respuestas = historial.map((item, index) => {
            const pregunta = cuestionario.preguntas[item.pregunta];
            const respuesta = pregunta.opciones[item.respuesta];

            return `${index + 1}. ${pregunta.titulo}\nRespuesta: ${respuesta.texto}`;
        }).join('\n\n');

        const recomendaciones = resultado.recomendaciones
            .map((item, index) => `${index + 1}. ${item}`).join('\n');

        return `*SOLICITUD DE ASISTENCIA TÉCNICA*

*DATOS DEL USUARIO*
Nombre: ${nombre.trim() || 'No proporcionado'}
Teléfono: ${telefono.trim() || 'No proporcionado'}

*INFORMACIÓN DEL EQUIPO*
Tipo: ${nombreEquipo}
Marca: ${datosEquipo.marca}
Modelo: ${datosEquipo.modelo || 'No especificado'}
Sistema operativo: ${datosEquipo.sistema || 'No especificado'}
Componentes: ${datosEquipo.componentes || 'No especificados'}

*DIAGNÓSTICO PRELIMINAR*
Categoría: ${nombreCategoria}
Resultado: ${resultado.titulo}

${resultado.descripcion}

*RESPUESTAS DEL CUESTIONARIO*
${respuestas}

*RECOMENDACIONES*
${recomendaciones}

Diagnóstico generado mediante Diagnóstico Técnico.
Este resultado es orientativo y no sustituye una evaluación profesional.`;
    }

    function enviarWhatsApp() {
        if (!numeroValido) return;

        const mensaje = encodeURIComponent(generarMensaje());
        const enlace = `https://wa.me/${NUMERO_TECNICO}?text=${mensaje}`;

        window.open(enlace, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="whatsapp-card">
            <div className="whatsapp-heading">
                <span className="whatsapp-icon" aria-hidden="true">✉</span>

                <div>
                    <h2>¿Necesitas asistencia técnica?</h2>
                    <p>Comparte tu diagnóstico con un técnico a través de WhatsApp.</p>
                </div>
            </div>

            <div className="whatsapp-fields">
                <div className="whatsapp-field">
                    <label htmlFor="nombre-contacto">Tu nombre (opcional)</label>
                    <input
                        id="nombre-contacto"
                        type="text"
                        maxLength={80}
                        placeholder="Ej. Juan Pérez"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="whatsapp-field">
                    <label htmlFor="telefono-contacto">Número de contacto (opcional)</label>
                    <input
                        id="telefono-contacto"
                        type="tel"
                        maxLength={20}
                        placeholder="Ej. +502 1234 5678"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                </div>
            </div>

            <p className="whatsapp-notice">
                Al continuar, los datos que proporciones se incluirán en el mensaje
                preparado para WhatsApp. Podrás revisarlo antes de enviarlo.
            </p>

            <button
                type="button"
                className="whatsapp-button"
                onClick={enviarWhatsApp}
                disabled={!numeroValido}
            >
                Enviar diagnóstico por WhatsApp →
            </button>

            {!numeroValido && (
                <p className="whatsapp-pending">
                    El número de WhatsApp del técnico está pendiente de configuración.
                </p>
            )}
        </div>
    );
}

export default EnvioWhatsApp;