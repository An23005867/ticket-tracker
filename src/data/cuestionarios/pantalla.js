
const pantalla = {
    inicio: 'pantalla_1',

    preguntas: {
        pantalla_1: {
            titulo: '¿Qué problema presenta la imagen de tu computadora?',
            opciones: [
                { texto: 'La pantalla está negra o no muestra imagen.', siguiente: { desktop: 'negra_desktop_1', laptop: 'negra_laptop_1' } },
                { texto: 'La imagen parpadea o se interrumpe.', siguiente: 'parpadeo_1' },
                { texto: 'Aparecen líneas, manchas o colores extraños.', siguiente: 'artefactos_1' },
                { texto: 'La imagen está demasiado oscura.', siguiente: 'oscura_1' },
                { texto: 'La resolución o el tamaño de la imagen es incorrecto.', siguiente: 'resolucion_1' },
                { texto: 'Una pantalla externa no funciona correctamente.', siguiente: 'externa_1' }
            ]
        },

        // PANTALLA NEGRA: ESCRITORIO

        negra_desktop_1: {
            titulo: '¿El monitor muestra alguna luz indicadora de encendido?',
            opciones: [
                { texto: 'Sí, tiene una luz encendida.', siguiente: 'negra_desktop_2' },
                { texto: 'No, parece estar completamente apagado.', siguiente: 'negra_desktop_3' },
                { texto: 'No estoy seguro.', siguiente: 'negra_desktop_3' }
            ]
        },

        negra_desktop_2: {
            titulo: '¿El monitor muestra un mensaje como "Sin señal" o "No signal"?',
            opciones: [
                { texto: 'Sí, aparece un mensaje de falta de señal.', siguiente: 'negra_desktop_4' },
                { texto: 'No, permanece completamente negro.', siguiente: 'negra_desktop_5' }
            ]
        },

        negra_desktop_3: {
            titulo: '¿Has comprobado el cable de alimentación y una toma de corriente funcional?',
            opciones: [
                { texto: 'Sí, pero el monitor sigue apagado.', siguiente: 'resultado_monitor' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia_monitor' }
            ]
        },

        negra_desktop_4: {
            titulo: '¿Has comprobado que el cable de video esté conectado y que el monitor tenga seleccionada la entrada correcta?',
            opciones: [
                { texto: 'Sí, pero continúa sin recibir señal.', siguiente: 'resultado_senal' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_conexion_video' }
            ]
        },

        negra_desktop_5: {
            titulo: '¿Puedes abrir el menú de configuración del propio monitor?',
            opciones: [
                { texto: 'Sí, el menú aparece normalmente.', siguiente: 'resultado_senal' },
                { texto: 'No, tampoco aparece el menú.', siguiente: 'resultado_monitor' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        // PANTALLA NEGRA: LAPTOP

        negra_laptop_1: {
            titulo: '¿La laptop parece estar encendida aunque la pantalla permanezca negra?',
            opciones: [
                { texto: 'Sí, se encienden luces o se escuchan ventiladores.', siguiente: 'negra_laptop_2' },
                { texto: 'No, parece que la laptop no enciende.', siguiente: 'resultado_encendido' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        negra_laptop_2: {
            titulo: '¿Has intentado aumentar el brillo utilizando las teclas correspondientes?',
            opciones: [
                { texto: 'Sí, pero la pantalla sigue negra.', siguiente: 'negra_laptop_3' },
                { texto: 'No, todavía no lo he intentado.', siguiente: 'resultado_brillo' }
            ]
        },

        negra_laptop_3: {
            titulo: '¿La laptop muestra imagen al conectarla a un monitor externo compatible?',
            opciones: [
                { texto: 'Sí, el monitor externo muestra imagen.', siguiente: 'resultado_pantalla_integrada' },
                { texto: 'No, tampoco aparece imagen en el monitor externo.', siguiente: 'resultado_video' },
                { texto: 'No tengo un monitor externo para comprobarlo.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        // PARPADEO

        parpadeo_1: {
            titulo: '¿El parpadeo ocurre constantemente o solamente al utilizar determinadas aplicaciones?',
            opciones: [
                { texto: 'Ocurre constantemente.', siguiente: 'parpadeo_2' },
                { texto: 'Ocurre solamente con ciertas aplicaciones.', siguiente: 'resultado_software_grafico' },
                { texto: 'Ocurre de manera intermitente.', siguiente: 'parpadeo_2' }
            ]
        },

        parpadeo_2: {
            titulo: '¿El parpadeo cambia al mover el cable de video o la tapa de la laptop?',
            opciones: [
                { texto: 'Sí, cambia cuando muevo la conexión o la tapa.', siguiente: { desktop: 'resultado_cable_video', laptop: 'resultado_pantalla_integrada' } },
                { texto: 'No, ocurre sin mover nada.', siguiente: 'parpadeo_3' },
                { texto: 'No estoy seguro.', siguiente: 'parpadeo_3' }
            ]
        },

        parpadeo_3: {
            titulo: '¿El problema comenzó después de cambiar la resolución, frecuencia de actualización o controladores?',
            opciones: [
                { texto: 'Sí, después de realizar alguno de esos cambios.', siguiente: 'resultado_configuracion_grafica' },
                { texto: 'No, apareció sin cambios conocidos.', siguiente: 'resultado_revision_pantalla' },
                { texto: 'No recuerdo.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        // LÍNEAS, MANCHAS Y COLORES

        artefactos_1: {
            titulo: '¿Las líneas o manchas aparecen desde que enciendes la computadora?',
            opciones: [
                { texto: 'Sí, aparecen desde el inicio.', siguiente: 'artefactos_2' },
                { texto: 'No, aparecen después de utilizarla un tiempo.', siguiente: 'artefactos_3' },
                { texto: 'Solamente aparecen en una aplicación.', siguiente: 'resultado_software_grafico' }
            ]
        },

        artefactos_2: {
            titulo: '¿El problema también aparece en otra pantalla o monitor compatible?',
            opciones: [
                { texto: 'Sí, aparece en ambas pantallas.', siguiente: 'resultado_video' },
                { texto: 'No, solamente aparece en la pantalla original.', siguiente: { desktop: 'resultado_monitor', laptop: 'resultado_pantalla_integrada' } },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        artefactos_3: {
            titulo: '¿Los defectos aparecen especialmente durante juegos o aplicaciones gráficas exigentes?',
            opciones: [
                { texto: 'Sí, principalmente durante tareas exigentes.', siguiente: 'resultado_video' },
                { texto: 'No, aparecen también con tareas sencillas.', siguiente: 'resultado_revision_pantalla' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_pantalla' }
            ]
        },

        // IMAGEN OSCURA

        oscura_1: {
            titulo: '¿La imagen continúa demasiado oscura después de aumentar el brillo?',
            opciones: [
                { texto: 'Sí, sigue demasiado oscura.', siguiente: 'oscura_2' },
                { texto: 'No, el brillo volvió a la normalidad.', siguiente: 'resultado_resuelto' },
                { texto: 'No sé cómo ajustar el brillo.', siguiente: 'resultado_brillo' }
            ]
        },

        oscura_2: {
            titulo: '¿Puedes distinguir débilmente el contenido de la pantalla?',
            opciones: [
                { texto: 'Sí, se distingue una imagen muy tenue.', siguiente: 'resultado_retroiluminacion' },
                { texto: 'No, no se distingue ninguna imagen.', siguiente: { desktop: 'negra_desktop_1', laptop: 'negra_laptop_1' } },
                { texto: 'La imagen se ve, pero sus colores son muy oscuros.', siguiente: 'resultado_configuracion_grafica' }
            ]
        },

        // RESOLUCIÓN

        resolucion_1: {
            titulo: '¿El problema comenzó después de cambiar la configuración o actualizar el sistema?',
            opciones: [
                { texto: 'Sí, comenzó después de un cambio.', siguiente: 'resultado_configuracion_grafica' },
                { texto: 'No, apareció sin cambios conocidos.', siguiente: 'resolucion_2' },
                { texto: 'No estoy seguro.', siguiente: 'resolucion_2' }
            ]
        },

        resolucion_2: {
            titulo: '¿La resolución recomendada de la pantalla aparece disponible en la configuración del sistema?',
            opciones: [
                { texto: 'Sí, aparece disponible.', siguiente: 'resultado_resolucion' },
                { texto: 'No, solamente aparecen otras resoluciones.', siguiente: 'resultado_controlador' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_resolucion' }
            ]
        },

        // MONITOR EXTERNO

        externa_1: {
            titulo: '¿Qué sucede al conectar la pantalla externa?',
            opciones: [
                { texto: 'La pantalla indica que no recibe señal.', siguiente: 'externa_2' },
                { texto: 'La computadora no detecta la pantalla.', siguiente: 'externa_3' },
                { texto: 'La imagen aparece, pero funciona incorrectamente.', siguiente: 'externa_4' }
            ]
        },

        externa_2: {
            titulo: '¿Has comprobado el cable y seleccionado la entrada de video correcta en el monitor?',
            opciones: [
                { texto: 'Sí, pero continúa sin señal.', siguiente: 'resultado_senal' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_conexion_video' }
            ]
        },

        externa_3: {
            titulo: '¿Has intentado detectar la pantalla desde la configuración del sistema?',
            opciones: [
                { texto: 'Sí, pero no aparece.', siguiente: 'resultado_senal' },
                { texto: 'No, todavía no lo he intentado.', siguiente: 'resultado_deteccion' }
            ]
        },

        externa_4: {
            titulo: '¿Qué problema presenta la imagen del monitor externo?',
            opciones: [
                { texto: 'La resolución o escala es incorrecta.', siguiente: 'resultado_resolucion' },
                { texto: 'La imagen parpadea.', siguiente: 'parpadeo_1' },
                { texto: 'Aparecen líneas o colores extraños.', siguiente: 'artefactos_1' }
            ]
        }
    },

    resultados: {
        resultado_monitor: {
            titulo: 'Posible problema del monitor',
            descripcion: 'Los síntomas podrían estar relacionados con la alimentación, la pantalla o algún componente interno del monitor.',
            recomendaciones: [
                'Comprueba las conexiones externas y el cable de alimentación.',
                'Verifica si el menú del monitor aparece correctamente.',
                'Prueba otro cable o monitor compatible, si está disponible.',
                'No abras el monitor ni intentes reparar sus componentes internos.',
                'Solicita una revisión técnica si el problema continúa.'
            ]
        },

        resultado_energia_monitor: {
            titulo: 'Posible problema de alimentación del monitor',
            descripcion: 'El monitor podría no estar recibiendo energía correctamente.',
            recomendaciones: [
                'Comprueba que el cable de alimentación esté bien conectado.',
                'Verifica que la toma de corriente funcione.',
                'Comprueba el botón de encendido del monitor.',
                'No utilices cables o adaptadores con daños visibles.'
            ]
        },

        resultado_senal: {
            titulo: 'Posible problema de señal de video',
            descripcion: 'La computadora o el monitor podrían presentar dificultades para transmitir o recibir la señal de imagen.',
            recomendaciones: [
                'Comprueba que el cable de video esté conectado correctamente.',
                'Verifica que la entrada seleccionada en el monitor sea la adecuada.',
                'Prueba otro cable o puerto compatible, si está disponible.',
                'Revisa la configuración de pantallas del sistema.',
                'Solicita asistencia técnica si el problema persiste.'
            ]
        },

        resultado_conexion_video: {
            titulo: 'Es necesario comprobar las conexiones de video',
            descripcion: 'Una conexión incorrecta o una entrada de video diferente podría explicar la ausencia de imagen.',
            recomendaciones: [
                'Comprueba ambos extremos del cable HDMI, DisplayPort o equivalente.',
                'Selecciona en el monitor la entrada correspondiente al cable utilizado.',
                'Verifica que el cable no presente daños visibles.',
                'Prueba nuevamente la conexión.'
            ]
        },

        resultado_pantalla_integrada: {
            titulo: 'Posible problema de la pantalla integrada',
            descripcion: 'El problema podría relacionarse con el panel de la laptop, su conexión interna o el sistema de retroiluminación.',
            recomendaciones: [
                'Evita forzar o mover repetidamente la tapa de la laptop.',
                'Comprueba si la imagen aparece en un monitor externo.',
                'No desmontes la pantalla ni manipules sus conexiones internas.',
                'Solicita una revisión técnica para identificar el componente afectado.'
            ]
        },

        resultado_video: {
            titulo: 'Posible problema de procesamiento gráfico',
            descripcion: 'Los síntomas podrían estar relacionados con el controlador gráfico, la temperatura o los componentes encargados de generar la imagen.',
            recomendaciones: [
                'Comprueba si existen actualizaciones oficiales del controlador gráfico.',
                'Observa si el problema aparece durante tareas exigentes.',
                'Verifica que las entradas de ventilación estén despejadas.',
                'Evita seguir utilizando aplicaciones exigentes si aparecen defectos graves de imagen.',
                'Solicita una revisión técnica si el problema persiste.'
            ]
        },

        resultado_encendido: {
            titulo: 'Posible problema de encendido',
            descripcion: 'Si el equipo no muestra señales de actividad, el problema podría estar relacionado con el encendido o la alimentación, no necesariamente con la pantalla.',
            recomendaciones: [
                'Comprueba que el cargador esté conectado correctamente.',
                'Verifica si el equipo muestra luces indicadoras de encendido.',
                'Evita intentar reparaciones eléctricas internas.',
                'Utiliza la categoría Encendido e inicio para investigar el problema.'
            ]
        },

        resultado_brillo: {
            titulo: 'Revisar la configuración de brillo',
            descripcion: 'La ausencia de imagen visible o el brillo insuficiente podrían estar relacionados con la configuración de pantalla.',
            recomendaciones: [
                'Utiliza las teclas de brillo disponibles en tu laptop, si corresponde.',
                'Comprueba el nivel de brillo desde la configuración del sistema.',
                'Revisa si existe algún modo de ahorro de energía que reduzca el brillo.',
                'Comprueba nuevamente si la imagen se muestra correctamente.'
            ]
        },

        resultado_cable_video: {
            titulo: 'Posible problema de cable o conexión de video',
            descripcion: 'Los cambios de imagen al mover una conexión podrían indicar un cable, conector o puerto defectuoso.',
            recomendaciones: [
                'Comprueba visualmente que el cable no presente daños.',
                'Evita forzar los conectores.',
                'Prueba otro cable compatible si está disponible.',
                'Solicita una revisión técnica si el puerto parece estar dañado.'
            ]
        },

        resultado_software_grafico: {
            titulo: 'Posible problema de software o controlador gráfico',
            descripcion: 'El problema podría estar relacionado con una aplicación, sus ajustes gráficos o el controlador de video.',
            recomendaciones: [
                'Comprueba si existen actualizaciones oficiales de la aplicación.',
                'Revisa los ajustes gráficos del programa afectado.',
                'Verifica si hay actualizaciones oficiales del controlador gráfico.',
                'Observa si el problema también ocurre en otras aplicaciones.'
            ]
        },

        resultado_configuracion_grafica: {
            titulo: 'Posible configuración gráfica incorrecta',
            descripcion: 'Los cambios de resolución, frecuencia de actualización o configuración podrían estar relacionados con el problema.',
            recomendaciones: [
                'Comprueba la resolución recomendada de la pantalla.',
                'Revisa la frecuencia de actualización admitida por el monitor.',
                'Utiliza las opciones de configuración de pantalla del sistema.',
                'Revierte los cambios recientes si el problema comenzó después de realizarlos.'
            ]
        },

        resultado_revision_pantalla: {
            titulo: 'Se necesita una revisión adicional de la pantalla',
            descripcion: 'Las respuestas todavía no permiten identificar una causa predominante. Podría tratarse de una configuración, una conexión o un componente de hardware.',
            recomendaciones: [
                'Observa en qué momento aparece el problema.',
                'Comprueba las conexiones externas cuando corresponda.',
                'Revisa la configuración de pantalla.',
                'Prueba otra pantalla compatible si está disponible.',
                'Solicita asistencia técnica si el problema persiste.'
            ]
        },

        resultado_retroiluminacion: {
            titulo: 'Posible problema de retroiluminación',
            descripcion: 'Una imagen extremadamente tenue podría indicar una dificultad en la iluminación del panel o su alimentación.',
            recomendaciones: [
                'Comprueba que el brillo no esté configurado al mínimo.',
                'Revisa las opciones de ahorro de energía.',
                'Evita desmontar el panel o manipular componentes eléctricos.',
                'Solicita una revisión técnica si la imagen continúa demasiado oscura.'
            ]
        },

        resultado_resolucion: {
            titulo: 'Posible problema de resolución o escala',
            descripcion: 'La imagen podría estar utilizando una resolución o escala diferente de la recomendada.',
            recomendaciones: [
                'Abre la configuración de pantalla del sistema.',
                'Selecciona la resolución recomendada para el monitor.',
                'Comprueba el porcentaje de escala.',
                'Verifica que los cambios mejoren la visualización.'
            ]
        },

        resultado_controlador: {
            titulo: 'Posible problema del controlador gráfico',
            descripcion: 'La ausencia de determinadas resoluciones podría estar relacionada con el controlador de video o la detección del monitor.',
            recomendaciones: [
                'Comprueba que el monitor esté identificado correctamente.',
                'Revisa el controlador gráfico desde las herramientas del sistema.',
                'Instala actualizaciones únicamente desde fuentes oficiales.',
                'Solicita asistencia técnica si no aparecen las resoluciones compatibles.'
            ]
        },

        resultado_deteccion: {
            titulo: 'Comprobar la detección de pantallas',
            descripcion: 'El sistema podría necesitar una configuración adicional para reconocer el monitor externo.',
            recomendaciones: [
                'Abre la configuración de pantalla del sistema.',
                'Utiliza la opción para detectar pantallas adicionales.',
                'En Windows, comprueba las opciones de proyección con Windows + P.',
                'Verifica que el monitor esté encendido y conectado.',
                'Prueba nuevamente la detección.'
            ]
        },

        resultado_resuelto: {
            titulo: 'La imagen parece funcionar correctamente',
            descripcion: 'Según tus respuestas, el problema de visualización parece haberse solucionado.',
            recomendaciones: [
                'Comprueba que la imagen se mantenga estable.',
                'Conserva la configuración que funciona correctamente.',
                'Observa si el inconveniente vuelve a presentarse.'
            ]
        }
    }
};

export default pantalla;