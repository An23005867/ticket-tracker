
import { useState } from 'react';
import cuestionarios from '../data/cuestionarios';
import categorias from '../data/categorias';
import EnvioWhatsApp from './EnvioWhatsApp';
import '../styles/cuestionario.css';

function Cuestionario({ categoria, tipoEquipo, datosEquipo, volver }) {
    const cuestionario = cuestionarios[categoria];
    const nombreEquipo = tipoEquipo === 'laptop' ? 'Laptop' : 'Computadora de escritorio';
    const nombreCategoria = categorias.find(item => item.id === categoria)?.nombre || categoria;

    const [preguntaActual, setPreguntaActual] = useState(cuestionario.inicio);
    const [respuesta, setRespuesta] = useState(null);
    const [historial, setHistorial] = useState([]);

    const pregunta = cuestionario.preguntas[preguntaActual];
    const resultado = cuestionario.resultados[preguntaActual];

    function continuar() {
        if (respuesta === null) return;

        const opcion = pregunta.opciones[respuesta];
        const siguiente = typeof opcion.siguiente === 'object'
            ? opcion.siguiente[tipoEquipo]
            : opcion.siguiente;

        if (!cuestionario.preguntas[siguiente] && !cuestionario.resultados[siguiente]) {
            console.error('No existe la pregunta o resultado:', siguiente);
            return;
        }

        setHistorial([...historial, {
            pregunta: preguntaActual,
            respuesta: respuesta,
            siguiente: siguiente
        }]);

        setPreguntaActual(siguiente);
        setRespuesta(null);
        window.scrollTo(0, 0);
    }

    function retroceder() {
        if (historial.length === 0) {
            volver();
            return;
        }

        const anterior = historial[historial.length - 1];

        setPreguntaActual(anterior.pregunta);
        setRespuesta(anterior.respuesta);
        setHistorial(historial.slice(0, -1));
        window.scrollTo(0, 0);
    }

    function reiniciar() {
        setPreguntaActual(cuestionario.inicio);
        setRespuesta(null);
        setHistorial([]);
        window.scrollTo(0, 0);
    }

    if (resultado) {
        return (
            <section className="question-section result-section">
                <div className="result-layout">

                    <div className="result-main-card">
                        <span className="section-tag">DIAGNÓSTICO PRELIMINAR</span>

                        <div className="result-symbol" aria-hidden="true">✓</div>

                        <h1>{resultado.titulo}</h1>
                        <p className="result-description">{resultado.descripcion}</p>

                        <div className="result-info">
                            <div className="result-info-item">
                                <span>Equipo seleccionado</span>
                                <strong>{nombreEquipo}</strong>
                            </div>

                            <div className="result-info-item">
                                <span>Categoría diagnosticada</span>
                                <strong>{nombreCategoria}</strong>
                            </div>
                        </div>

                        <div className="recommendations">
                            <h2>Recomendaciones</h2>

                            <ul>
                                {resultado.recomendaciones.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="result-disclaimer">
                            Este diagnóstico es orientativo y no sustituye una evaluación técnica profesional.
                        </p>
                    </div>

                    <div className="result-side">
                        <div className="result-summary-card">
                            <div className="result-side-heading">
                                <span className="result-side-icon" aria-hidden="true">☷</span>
                                <div>
                                    <h2>Resumen del diagnóstico</h2>
                                    <p>Consulta las respuestas proporcionadas.</p>
                                </div>
                            </div>

                            <details className="diagnostic-summary">
                                <summary>
                                    <span>Ver preguntas y respuestas</span>
                                    <span className="summary-indicator" aria-hidden="true">+</span>
                                </summary>

                                <div className="summary-content">
                                    {historial.map((item, index) => {
                                        const preguntaRespondida = cuestionario.preguntas[item.pregunta];
                                        const opcionSeleccionada = preguntaRespondida.opciones[item.respuesta];

                                        return (
                                            <div className="summary-item" key={index}>
                                                <span className="summary-number">Pregunta {index + 1}</span>
                                                <h3>{preguntaRespondida.titulo}</h3>
                                                <p>{opcionSeleccionada.texto}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </details>
                        </div>

                        <EnvioWhatsApp
                            tipoEquipo={tipoEquipo}
                            datosEquipo={datosEquipo}
                            categoria={categoria}
                            cuestionario={cuestionario}
                            resultado={resultado}
                            historial={historial}
                        />
                    </div>
                </div>

                <div className="result-actions">
                    <button type="button" className="back-button" onClick={retroceder}>
                        ← Pregunta anterior
                    </button>

                    <button type="button" className="primary-button" onClick={reiniciar}>
                        Reiniciar diagnóstico
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="question-section">
            <div className="question-container">
                <div className="question-top">
                    <span className="section-tag">DIAGNÓSTICO · PASO 3</span>
                    <span className="question-counter">
                        Pregunta {historial.length + 1}
                    </span>
                </div>

                <p className="question-device">Equipo seleccionado: {nombreEquipo}</p>

                <h1>{pregunta.titulo}</h1>
                <p>Selecciona la respuesta que mejor describa tu situación.</p>

                <div className="answer-list">
                    {pregunta.opciones.map((opcion, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`answer-option ${respuesta === index ? 'selected' : ''}`}
                            onClick={() => setRespuesta(index)}
                            aria-pressed={respuesta === index}
                        >
                            <span className="answer-indicator"></span>
                            <span>{opcion.texto}</span>
                        </button>
                    ))}
                </div>

                <div className="question-actions">
                    <button type="button" className="back-button" onClick={retroceder}>
                        ← Volver
                    </button>

                    <button
                        type="button"
                        className="primary-button"
                        onClick={continuar}
                        disabled={respuesta === null}
                    >
                        Continuar →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Cuestionario;