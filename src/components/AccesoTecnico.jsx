import { useState } from 'react';
import { iniciarSesion } from '../services/auth';
import '../styles/accesoTecnico.css';

function AccesoTecnico({ onAcceso, volver }) {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    async function manejarIngreso(evento) {
        evento.preventDefault();
        if (cargando) return;

        setError('');
        setCargando(true);

        try {
            const tecnico = await iniciarSesion(correo, contrasena);
            onAcceso(tecnico);
        } catch (error) {
            setError(error.message);
        } finally {
            setCargando(false);
        }
    }

    return (
        <section className="acceso-section">
            <div className="acceso-card">
                <div className="acceso-icono" aria-hidden="true">DT</div>

                <span className="section-tag">ÁREA PRIVADA</span>
                <h1>Acceso para técnicos</h1>

                <p className="acceso-descripcion">
                    Inicia sesión para consultar y administrar
                    las solicitudes de soporte técnico.
                </p>

                <form onSubmit={manejarIngreso} className="acceso-formulario">
                    <label htmlFor="correo-tecnico">Correo electrónico</label>
                    <input
                        id="correo-tecnico"
                        type="email"
                        value={correo}
                        onChange={(evento) => setCorreo(evento.target.value)}
                        placeholder="correo@ejemplo.com"
                        autoComplete="username"
                        required
                        disabled={cargando}
                    />

                    <label htmlFor="contrasena-tecnico">Contraseña</label>
                    <input
                        id="contrasena-tecnico"
                        type="password"
                        value={contrasena}
                        onChange={(evento) => setContrasena(evento.target.value)}
                        placeholder="Introduce tu contraseña"
                        autoComplete="current-password"
                        required
                        disabled={cargando}
                    />

                    {error && <p className="acceso-error" role="alert">{error}</p>}

                    <button
                        type="submit"
                        className="primary-button acceso-boton"
                        disabled={cargando}
                    >
                        {cargando ? 'Verificando...' : 'Iniciar sesión →'}
                    </button>
                </form>

                <button
                    type="button"
                    className="acceso-volver"
                    onClick={volver}
                    disabled={cargando}
                >
                    ← Volver al inicio
                </button>
            </div>
        </section>
    );
}

export default AccesoTecnico;