function SeleccionEquipo({ tipoEquipo, setTipoEquipo, continuar, volver }) {
    return (
        <section className="selection-section">
            <div className="selection-heading">
                <span className="section-tag">DIAGNÓSTICO · PASO 1</span>
                <h1>¿Qué tipo de computadora utilizas?</h1>
                <p>Selecciona el equipo que presenta el problema.</p>
            </div>

            <div className="device-grid">
                <button
                    type="button"
                    className={`device-card desktop-card ${tipoEquipo === 'desktop' ? 'selected' : ''}`}
                    onClick={() => setTipoEquipo('desktop')}
                    aria-pressed={tipoEquipo === 'desktop'}
                >
                    <span className="device-icon" aria-hidden="true">🖥️</span>
                    <strong>Computadora de escritorio</strong>
                    <span>Equipo de escritorio con monitor y periféricos.</span>
                </button>

                <button
                    type="button"
                    className={`device-card laptop-card ${tipoEquipo === 'laptop' ? 'selected' : ''}`}
                    onClick={() => setTipoEquipo('laptop')}
                    aria-pressed={tipoEquipo === 'laptop'}
                >
                    <span className="device-icon" aria-hidden="true">💻</span>
                    <strong>Laptop</strong>
                    <span>Computadora portátil con pantalla y teclado integrados.</span>
                </button>
            </div>

            <div className="selection-actions">
                <button type="button" className="back-button" onClick={volver}>
                    ← Volver
                </button>

                <button
                    type="button"
                    className="primary-button"
                    onClick={continuar}
                    disabled={!tipoEquipo}
                >
                    Continuar →
                </button>
            </div>
        </section>
    );
}

export default SeleccionEquipo;