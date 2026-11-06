import { lazy, Suspense, useEffect, useState } from 'react';
import SeleccionEquipo from './components/SeleccionEquipo';
import InformacionEquipo from './components/InformacionEquipo';
import SeleccionCategoria from './components/SeleccionCategoria';
import Cuestionario from './components/Cuestionario';
import AccesoTecnico from './components/AccesoTecnico';
import { obtenerTecnico, cerrarSesion } from './services/auth';
import { supabase } from './services/supabase';
import cuestionarios from './data/cuestionarios';
import './App.css';

const PanelTecnico = lazy(() => import('./components/PanelTecnico'));

const datosIniciales = {
    marca: '',
    modelo: '',
    sistema: '',
    componentes: ''
};

function App() {
    const [pantalla, setPantalla] = useState('inicio');
    const [tipoEquipo, setTipoEquipo] = useState('');
    const [datosEquipo, setDatosEquipo] = useState({ ...datosIniciales });
    const [categoria, setCategoria] = useState('');
    const [tecnico, setTecnico] = useState(null);
    const [verificandoSesion, setVerificandoSesion] = useState(true);
    const [cerrandoSesion, setCerrandoSesion] = useState(false);
    const [errorSesion, setErrorSesion] = useState('');

    useEffect(() => {
        let activo = true;

        async function recuperarSesion() {
            try {
                const usuario = await obtenerTecnico();
                if (!activo) return;

                if (usuario) {
                    setTecnico(usuario);
                    setPantalla('panel-tecnico');
                }
            } catch {
                if (activo) {
                    setErrorSesion('No se pudo verificar la sesión.');
                }
            } finally {
                if (activo) setVerificandoSesion(false);
            }
        }

        recuperarSesion();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (evento) => {
                if (evento === 'SIGNED_OUT') {
                    setTecnico(null);
                    setPantalla('inicio');
                }
            }
        );

        return () => {
            activo = false;
            subscription.unsubscribe();
        };
    }, []);

    function cambiarPantalla(destino) {
        setPantalla(destino);
        window.scrollTo(0, 0);
    }

    function iniciarDiagnostico() {
        setTipoEquipo('');
        setDatosEquipo({ ...datosIniciales });
        setCategoria('');
        cambiarPantalla('equipo');
    }

    function continuarCategoria() {
        if (!categoria) return;

        if (!cuestionarios[categoria]) {
            alert('El cuestionario de esta categoría estará disponible próximamente.');
            return;
        }

        cambiarPantalla('cuestionario');
    }

    function accesoAutorizado(usuario) {
        setTecnico(usuario);
        setErrorSesion('');
        cambiarPantalla('panel-tecnico');
    }

    async function salirDelPanel() {
        if (cerrandoSesion) return;

        setCerrandoSesion(true);
        setErrorSesion('');

        try {
            await cerrarSesion();
            setTecnico(null);
            cambiarPantalla('inicio');
        } catch (error) {
            setErrorSesion(error.message);
        } finally {
            setCerrandoSesion(false);
        }
    }

    if (verificandoSesion) {
        return (
            <div className="site-container">
                <main className="how-section">
                    <div className="section-heading">
                        <h1>Verificando sesión...</h1>
                        <p>Espera un momento.</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="site-container">
            <header className="navbar">
                <a
                    className="brand"
                    href="#inicio"
                    onClick={() => cambiarPantalla('inicio')}
                >
                    <span className="brand-icon">DT</span>
                    <span>Diagnóstico Técnico</span>
                </a>

                <nav className="nav-links" aria-label="Navegación principal">
                    <a
                        href="#inicio"
                        onClick={() => cambiarPantalla('inicio')}
                    >
                        Inicio
                    </a>

                    <a
                        href="#como-funciona"
                        onClick={() => cambiarPantalla('inicio')}
                    >
                        ¿Cómo funciona?
                    </a>

                    <a
                        href="#acceso-tecnico"
                        onClick={() => cambiarPantalla(tecnico ? 'panel-tecnico' : 'acceso-tecnico')}
                    >
                        {tecnico ? 'Panel técnico' : 'Acceso técnico'}
                    </a>
                </nav>
            </header>

            <main>
                {pantalla === 'inicio' && (
                    <>
                        <section className="hero" id="inicio">
                            <div className="hero-content">
                                <span className="hero-tag">
                                    SOPORTE TÉCNICO INTELIGENTE
                                </span>

                                <h1>Entiende qué le pasa a tu computadora.</h1>

                                <p>
                                    Identifica posibles problemas en tu computadora
                                    mediante un diagnóstico guiado, sencillo y rápido.
                                    Obtén recomendaciones antes de solicitar asistencia técnica.
                                </p>

                                <button
                                    type="button"
                                    className="primary-button"
                                    onClick={iniciarDiagnostico}
                                >
                                    Iniciar diagnóstico <span aria-hidden="true">→</span>
                                </button>

                                <span className="hero-note">
                                    Para computadoras de escritorio y laptops.
                                </span>
                            </div>

                            <div className="hero-visual" aria-hidden="true">
                                <div className="visual-window">
                                    <div className="window-header">
                                        <span className="window-dot"></span>
                                        <span className="window-dot"></span>
                                        <span className="window-dot"></span>
                                    </div>

                                    <div className="window-content">
                                        <div className="computer-icon">
                                            <div className="computer-screen">
                                                <span>?</span>
                                            </div>
                                            <div className="computer-stand"></div>
                                        </div>

                                        <div className="status-label">
                                            Analizando tu equipo...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="how-section" id="como-funciona">
                            <div className="section-heading">
                                <span className="section-tag">PROCESO SENCILLO</span>
                                <h2>¿Cómo funciona?</h2>
                                <p>
                                    Tres pasos para entender mejor el problema de tu computadora.
                                </p>
                            </div>

                            <div className="steps-grid">
                                <article className="step-card step-lavender">
                                    <span className="step-number">01</span>
                                    <div className="step-icon" aria-hidden="true">⌕</div>
                                    <h3>Identifica el problema</h3>
                                    <p>
                                        Selecciona tu tipo de equipo y describe
                                        el inconveniente que estás experimentando.
                                    </p>
                                </article>

                                <article className="step-card step-mint">
                                    <span className="step-number">02</span>
                                    <div className="step-icon" aria-hidden="true">☑</div>
                                    <h3>Responde las preguntas</h3>
                                    <p>
                                        Sigue un cuestionario guiado que nos ayudará
                                        a identificar las posibles causas.
                                    </p>
                                </article>

                                <article className="step-card step-peach">
                                    <span className="step-number">03</span>
                                    <div className="step-icon" aria-hidden="true">✓</div>
                                    <h3>Obtén recomendaciones</h3>
                                    <p>
                                        Recibe un diagnóstico preliminar y conoce
                                        los siguientes pasos recomendados.
                                    </p>
                                </article>
                            </div>
                        </section>
                    </>
                )}

                {pantalla === 'equipo' && (
                    <SeleccionEquipo
                        tipoEquipo={tipoEquipo}
                        setTipoEquipo={setTipoEquipo}
                        continuar={() => tipoEquipo && cambiarPantalla('informacion')}
                        volver={() => cambiarPantalla('inicio')}
                    />
                )}

                {pantalla === 'informacion' && (
                    <InformacionEquipo
                        tipoEquipo={tipoEquipo}
                        datosEquipo={datosEquipo}
                        setDatosEquipo={setDatosEquipo}
                        continuar={() => datosEquipo.marca.trim() && cambiarPantalla('categoria')}
                        volver={() => cambiarPantalla('equipo')}
                    />
                )}

                {pantalla === 'categoria' && (
                    <SeleccionCategoria
                        categoria={categoria}
                        setCategoria={setCategoria}
                        continuar={continuarCategoria}
                        volver={() => cambiarPantalla('informacion')}
                    />
                )}

                {pantalla === 'cuestionario' && (
                    <Cuestionario
                        categoria={categoria}
                        tipoEquipo={tipoEquipo}
                        datosEquipo={datosEquipo}
                        volver={() => cambiarPantalla('categoria')}
                    />
                )}

                {pantalla === 'acceso-tecnico' && (
                    <AccesoTecnico
                        onAcceso={accesoAutorizado}
                        volver={() => cambiarPantalla('inicio')}
                    />
                )}

                {pantalla === 'panel-tecnico' && tecnico && (
                    <Suspense
                        fallback={
                            <section className="how-section">
                                <div className="section-heading">
                                    <h2>Cargando panel administrativo...</h2>
                                    <p>Preparando las herramientas de soporte técnico.</p>
                                </div>
                            </section>
                        }
                    >
                        <PanelTecnico
                            tecnico={tecnico}
                            salir={salirDelPanel}
                        />
                    </Suspense>
                )}

                {errorSesion && pantalla !== 'panel-tecnico' && (
                    <p
                        role="alert"
                        style={{ textAlign: 'center', color: '#B94A48' }}
                    >
                        {errorSesion}
                    </p>
                )}
            </main>

            <footer className="footer">
                <span>Diagnóstico Técnico</span>
                <p>
                    Orientación técnica para computadoras de escritorio y laptops.
                </p>
            </footer>
        </div>
    );
}

export default App;