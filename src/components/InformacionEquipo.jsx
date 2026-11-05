
import '../styles/informacionEquipo.css';

function InformacionEquipo({ tipoEquipo, datosEquipo, setDatosEquipo, continuar, volver }) {
    const nombreEquipo = tipoEquipo === 'laptop' ? 'Laptop' : 'Computadora de escritorio';

    function actualizar(campo, valor) {
        setDatosEquipo({ ...datosEquipo, [campo]: valor });
    }

    return (
        <section className="equipment-info-section">
            <div className="equipment-info-card">
                <div className="equipment-info-top">
                    <span className="section-tag">INFORMACIÓN DEL EQUIPO</span>
                    <span className="equipment-info-type">{nombreEquipo}</span>
                </div>

                <h1>Cuéntanos sobre tu computadora.</h1>
                <p className="equipment-info-description">
                    Proporciona algunos datos de tu equipo para obtener una orientación
                    más completa y facilitar una futura consulta técnica.
                </p>

                <div className="equipment-info-form">
                    <div className="equipment-info-field">
                        <label htmlFor="marca">Marca del equipo *</label>
                        <input
                            id="marca"
                            type="text"
                            maxLength={60}
                            placeholder="Ej. HP, Dell, Lenovo, ASUS..."
                            value={datosEquipo.marca}
                            onChange={e => actualizar('marca', e.target.value)}
                        />
                    </div>

                    <div className="equipment-info-field">
                        <label htmlFor="modelo">Modelo del equipo (opcional)</label>
                        <input
                            id="modelo"
                            type="text"
                            maxLength={100}
                            placeholder="Ej. IdeaPad 3, Inspiron 15..."
                            value={datosEquipo.modelo}
                            onChange={e => actualizar('modelo', e.target.value)}
                        />
                    </div>

                    <div className="equipment-info-field">
                        <label htmlFor="sistema">Sistema operativo</label>
                        <select
                            id="sistema"
                            value={datosEquipo.sistema}
                            onChange={e => actualizar('sistema', e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Windows 11">Windows 11</option>
                            <option value="Windows 10">Windows 10</option>
                            <option value="Otro">Otro</option>
                            <option value="No lo sé">No lo sé</option>
                        </select>
                    </div>

                    <div className="equipment-info-field">
                        <label htmlFor="componentes">Componentes o características (opcional)</label>
                        <textarea
                            id="componentes"
                            rows="4"
                            maxLength={500}
                            placeholder="Ej. 8 GB de RAM, Intel Core i5, SSD de 256 GB..."
                            value={datosEquipo.componentes}
                            onChange={e => actualizar('componentes', e.target.value)}
                        />
                        <span className="equipment-info-help">
                            Si no conoces esta información, puedes dejarla en blanco.
                        </span>
                    </div>
                </div>

                <div className="question-actions">
                    <button type="button" className="back-button" onClick={volver}>
                        ← Volver
                    </button>

                    <button
                        type="button"
                        className="primary-button"
                        onClick={continuar}
                        disabled={!datosEquipo.marca.trim()}
                    >
                        Continuar →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default InformacionEquipo;