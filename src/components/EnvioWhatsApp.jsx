import categorias from '../data/categorias';
import '../styles/envioWhatsApp.css';

const NUMERO_TECNICO = '50236326513';

function EnvioWhatsApp({ tipoEquipo, datosEquipo, categoria, cuestionario, resultado, historial, ticketCreado, datosContacto }) {
    const nombre = datosContacto?.nombre?.trim() || 'No proporcionado';
    const telefono = datosContacto?.telefono?.trim() || 'No proporcionado';

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
            .map((item, index) => `${index + 1}. ${item}`)
            .join('\n');

        const informacionTicket = ticketCreado?.codigo
            ? `*TICKET DE SOPORTE*\nCódigo: ${ticketCreado.codigo}\nEstado: ${ticketCreado.estado || 'pendiente'}\n\n`
            : '';

        return `*SOLICITUD DE ASISTENCIA TÉCNICA*

${informacionTicket}*DATOS DEL USUARIO*
Nombre: ${nombre}
Teléfono: ${telefono}

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
${respuestas || 'No se registraron respuestas.'}

*RECOMENDACIONES*
${recomendaciones}

Diagnóstico generado mediante Diagnóstico Técnico.
Este resultado es orientativo y no sustituye una evaluación profesional.`;
    }

    function enviarWhatsApp() {
        if (!numeroValido) return;

        const mensaje = encodeURIComponent(generarMensaje());
        window.open(
            `https://wa.me/${NUMERO_TECNICO}?text=${mensaje}`,
            '_blank',
            'noopener,noreferrer'
        );
    }

    return (
        <div className="whatsapp-card">
            <div className="whatsapp-heading">
                <span className="section-tag">CONTACTO DIRECTO</span>
                <h2>Enviar diagnóstico por WhatsApp</h2>
                <p>
                    Comparte el resultado de tu diagnóstico con soporte técnico
                    para recibir asistencia personalizada.
                </p>
            </div>

            <div className="whatsapp-summary">
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Teléfono:</strong> {telefono}</p>
                <p><strong>Ticket:</strong> {ticketCreado?.codigo || 'No registrado'}</p>
            </div>

            <p className="whatsapp-notice">
                Los datos de contacto se toman del formulario de creación del ticket.
                El token privado de seguimiento no se comparte por WhatsApp.
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
                <p className="ticket-error" role="alert">
                    El número de soporte técnico no está configurado correctamente.
                </p>
            )}
        </div>
    );
}

export default EnvioWhatsApp;