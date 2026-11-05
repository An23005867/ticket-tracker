
import categorias from '../data/categorias';
import '../styles/categorias.css';

function SeleccionCategoria({ categoria, setCategoria, continuar, volver }) {
    return (
        <section className="category-section">
            <div className="selection-heading">
                <span className="section-tag">DIAGNÓSTICO · PASO 2</span>
                <h1>¿Qué problema presenta tu computadora?</h1>
                <p>Selecciona la categoría que mejor describa el inconveniente.</p>
            </div>

            <div className="category-grid">
                {categorias.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={`category-card category-${item.color} ${categoria === item.id ? 'selected' : ''}`}
                        onClick={() => setCategoria(item.id)}
                        aria-pressed={categoria === item.id}
                    >
                        <span className="category-icon" aria-hidden="true">
                            {item.icono}
                        </span>

                        <strong>{item.nombre}</strong>
                        <span className="category-description">{item.descripcion}</span>
                    </button>
                ))}
            </div>

            <div className="selection-actions">
                <button type="button" className="back-button" onClick={volver}>
                    ← Volver
                </button>

                <button
                    type="button"
                    className="primary-button"
                    onClick={continuar}
                    disabled={!categoria}
                >
                    Continuar →
                </button>
            </div>
        </section>
    );
}

export default SeleccionCategoria;