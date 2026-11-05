
const software = {
    inicio: 'software_1',

    preguntas: {
        software_1: {
            titulo: '¿Qué problema de sistema operativo o software presenta tu computadora?',
            opciones: [
                { texto: 'Windows funciona incorrectamente o presenta errores.', siguiente: 'sistema_1' },
                { texto: 'Aparece una pantalla azul o el equipo se reinicia por un error.', siguiente: 'pantalla_azul_1' },
                { texto: 'Una aplicación no abre, se cierra o deja de responder.', siguiente: 'aplicacion_1' },
                { texto: 'Las actualizaciones del sistema fallan.', siguiente: 'actualizacion_1' },
                { texto: 'Tengo problemas para iniciar sesión.', siguiente: 'sesion_1' },
                { texto: 'Aparecen mensajes de error constantemente.', siguiente: 'errores_1' },
                { texto: 'Sospecho que la computadora tiene un virus o malware.', siguiente: 'malware_1' }
            ]
        },

        // SISTEMA OPERATIVO

        sistema_1: {
            titulo: '¿Qué comportamiento incorrecto presenta Windows?',
            opciones: [
                { texto: 'El escritorio o las funciones del sistema dejan de responder.', siguiente: 'sistema_2' },
                { texto: 'Algunas herramientas o configuraciones no funcionan.', siguiente: 'sistema_3' },
                { texto: 'El problema comenzó después de una actualización.', siguiente: 'sistema_4' },
                { texto: 'Windows no consigue iniciar correctamente.', siguiente: 'resultado_inicio_sistema' }
            ]
        },

        sistema_2: {
            titulo: '¿El problema ocurre constantemente o solamente en determinadas ocasiones?',
            opciones: [
                { texto: 'Ocurre constantemente.', siguiente: 'resultado_integridad_sistema' },
                { texto: 'Ocurre cuando abro varias aplicaciones.', siguiente: 'resultado_recursos_sistema' },
                { texto: 'Ocurre de manera aleatoria.', siguiente: 'resultado_revision_sistema' }
            ]
        },

        sistema_3: {
            titulo: '¿El problema afecta a varias funciones de Windows o solamente a una?',
            opciones: [
                { texto: 'Afecta a varias funciones.', siguiente: 'resultado_integridad_sistema' },
                { texto: 'Solamente afecta a una función.', siguiente: 'resultado_configuracion_sistema' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_sistema' }
            ]
        },

        sistema_4: {
            titulo: '¿El problema comenzó inmediatamente después de instalar una actualización de Windows?',
            opciones: [
                { texto: 'Sí, comenzó después de actualizar.', siguiente: 'resultado_actualizacion_reciente' },
                { texto: 'No, el problema ya existía.', siguiente: 'resultado_revision_sistema' },
                { texto: 'No recuerdo exactamente cuándo comenzó.', siguiente: 'resultado_revision_sistema' }
            ]
        },

        // PANTALLA AZUL

        pantalla_azul_1: {
            titulo: '¿Con qué frecuencia aparece la pantalla azul?',
            opciones: [
                { texto: 'Apareció solamente una vez.', siguiente: 'pantalla_azul_2' },
                { texto: 'Aparece frecuentemente.', siguiente: 'pantalla_azul_3' },
                { texto: 'Aparece cada vez que intento iniciar Windows.', siguiente: 'resultado_error_critico' }
            ]
        },

        pantalla_azul_2: {
            titulo: '¿La computadora funciona normalmente después de reiniciarse?',
            opciones: [
                { texto: 'Sí, funciona normalmente.', siguiente: 'resultado_error_ocasional' },
                { texto: 'No, continúa presentando problemas.', siguiente: 'pantalla_azul_3' }
            ]
        },

        pantalla_azul_3: {
            titulo: '¿Los errores comenzaron después de instalar controladores, actualizaciones o dispositivos?',
            opciones: [
                { texto: 'Sí, después de realizar alguno de esos cambios.', siguiente: 'resultado_controladores' },
                { texto: 'No, comenzaron sin cambios conocidos.', siguiente: 'pantalla_azul_4' },
                { texto: 'No estoy seguro.', siguiente: 'pantalla_azul_4' }
            ]
        },

        pantalla_azul_4: {
            titulo: '¿Los errores aparecen especialmente cuando utilizas aplicaciones exigentes?',
            opciones: [
                { texto: 'Sí, durante juegos o programas exigentes.', siguiente: 'resultado_estabilidad_hardware' },
                { texto: 'No, aparecen incluso durante tareas sencillas.', siguiente: 'resultado_error_critico' },
                { texto: 'Ocurren de manera aparentemente aleatoria.', siguiente: 'resultado_error_critico' }
            ]
        },

        // APLICACIONES

        aplicacion_1: {
            titulo: '¿Qué problema presenta la aplicación?',
            opciones: [
                { texto: 'No consigue abrirse.', siguiente: 'aplicacion_2' },
                { texto: 'Se abre, pero se cierra inesperadamente.', siguiente: 'aplicacion_3' },
                { texto: 'Se congela o deja de responder.', siguiente: 'aplicacion_4' },
                { texto: 'Muestra un mensaje de error.', siguiente: 'aplicacion_5' }
            ]
        },

        aplicacion_2: {
            titulo: '¿La aplicación funcionaba correctamente antes?',
            opciones: [
                { texto: 'Sí, antes funcionaba.', siguiente: 'aplicacion_6' },
                { texto: 'No, nunca ha funcionado correctamente.', siguiente: 'resultado_compatibilidad' },
                { texto: 'Es la primera vez que intento utilizarla.', siguiente: 'resultado_compatibilidad' }
            ]
        },

        aplicacion_3: {
            titulo: '¿La aplicación comenzó a cerrarse después de actualizarla?',
            opciones: [
                { texto: 'Sí, después de una actualización.', siguiente: 'resultado_actualizacion_aplicacion' },
                { texto: 'No, comenzó sin cambios conocidos.', siguiente: 'aplicacion_6' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_aplicacion' }
            ]
        },

        aplicacion_4: {
            titulo: '¿La computadora también se vuelve lenta cuando la aplicación deja de responder?',
            opciones: [
                { texto: 'Sí, todo el sistema se vuelve lento.', siguiente: 'resultado_recursos_sistema' },
                { texto: 'No, solamente se congela esa aplicación.', siguiente: 'resultado_revision_aplicacion' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_aplicacion' }
            ]
        },

        aplicacion_5: {
            titulo: '¿El mensaje de error menciona archivos faltantes, permisos o incompatibilidad?',
            opciones: [
                { texto: 'Sí, menciona archivos faltantes.', siguiente: 'resultado_instalacion_aplicacion' },
                { texto: 'Sí, menciona permisos o acceso denegado.', siguiente: 'resultado_permisos_aplicacion' },
                { texto: 'Sí, menciona incompatibilidad.', siguiente: 'resultado_compatibilidad' },
                { texto: 'No entiendo el mensaje o indica otro error.', siguiente: 'resultado_revision_aplicacion' }
            ]
        },

        aplicacion_6: {
            titulo: '¿El problema ocurre únicamente con esa aplicación?',
            opciones: [
                { texto: 'Sí, solamente con esa aplicación.', siguiente: 'resultado_instalacion_aplicacion' },
                { texto: 'No, varias aplicaciones presentan problemas.', siguiente: 'resultado_integridad_sistema' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_aplicacion' }
            ]
        },

        // ACTUALIZACIONES

        actualizacion_1: {
            titulo: '¿Qué sucede cuando intentas actualizar Windows?',
            opciones: [
                { texto: 'La actualización muestra un error y no se instala.', siguiente: 'actualizacion_2' },
                { texto: 'La descarga permanece detenida.', siguiente: 'actualizacion_3' },
                { texto: 'La actualización se instala, pero después causa problemas.', siguiente: 'resultado_actualizacion_reciente' },
                { texto: 'Windows solicita reiniciar constantemente.', siguiente: 'actualizacion_4' }
            ]
        },

        actualizacion_2: {
            titulo: '¿El sistema muestra un código de error específico?',
            opciones: [
                { texto: 'Sí, aparece un código de error.', siguiente: 'resultado_error_actualizacion' },
                { texto: 'No, solamente indica que la actualización falló.', siguiente: 'actualizacion_5' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_error_actualizacion' }
            ]
        },

        actualizacion_3: {
            titulo: '¿La conexión a Internet funciona correctamente en otras aplicaciones?',
            opciones: [
                { texto: 'Sí, Internet funciona normalmente.', siguiente: 'actualizacion_5' },
                { texto: 'No, también tengo problemas de conexión.', siguiente: 'resultado_conexion_actualizacion' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_conexion_actualizacion' }
            ]
        },

        actualizacion_4: {
            titulo: '¿El sistema vuelve a solicitar el reinicio después de completar una actualización?',
            opciones: [
                { texto: 'Sí, sucede repetidamente.', siguiente: 'resultado_actualizacion_pendiente' },
                { texto: 'No, solamente solicita un reinicio normal.', siguiente: 'resultado_reinicio_actualizacion' }
            ]
        },

        actualizacion_5: {
            titulo: '¿La unidad principal tiene suficiente espacio de almacenamiento disponible?',
            opciones: [
                { texto: 'Sí, tiene suficiente espacio.', siguiente: 'resultado_error_actualizacion' },
                { texto: 'No, está casi llena.', siguiente: 'resultado_espacio_actualizacion' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_espacio_actualizacion' }
            ]
        },

        // INICIO DE SESIÓN

        sesion_1: {
            titulo: '¿Qué problema ocurre al intentar iniciar sesión?',
            opciones: [
                { texto: 'La contraseña o el PIN no son aceptados.', siguiente: 'sesion_2' },
                { texto: 'Aparece un error al cargar mi perfil de usuario.', siguiente: 'resultado_perfil_usuario' },
                { texto: 'La pantalla de inicio de sesión se congela.', siguiente: 'resultado_revision_sistema' },
                { texto: 'No aparece la pantalla de inicio de sesión.', siguiente: 'resultado_inicio_sistema' }
            ]
        },

        sesion_2: {
            titulo: '¿Estás utilizando una cuenta local o una cuenta de Microsoft?',
            opciones: [
                { texto: 'Una cuenta de Microsoft.', siguiente: 'resultado_cuenta_microsoft' },
                { texto: 'Una cuenta local del equipo.', siguiente: 'resultado_cuenta_local' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_sesion' }
            ]
        },

        // MENSAJES DE ERROR

        errores_1: {
            titulo: '¿Cuándo aparecen los mensajes de error?',
            opciones: [
                { texto: 'Cuando inicia Windows.', siguiente: 'errores_2' },
                { texto: 'Cuando abro una aplicación.', siguiente: 'aplicacion_5' },
                { texto: 'Durante el funcionamiento normal del equipo.', siguiente: 'errores_3' }
            ]
        },

        errores_2: {
            titulo: '¿El mensaje menciona una aplicación o servicio específico?',
            opciones: [
                { texto: 'Sí, menciona una aplicación.', siguiente: 'resultado_inicio_aplicaciones' },
                { texto: 'No, parece ser un error del sistema.', siguiente: 'resultado_integridad_sistema' },
                { texto: 'No entiendo el mensaje.', siguiente: 'resultado_revision_errores' }
            ]
        },

        errores_3: {
            titulo: '¿Los mensajes comenzaron después de instalar o actualizar algún programa?',
            opciones: [
                { texto: 'Sí, comenzaron después de un cambio.', siguiente: 'resultado_conflicto_software' },
                { texto: 'No, aparecen desde hace bastante tiempo.', siguiente: 'resultado_revision_errores' },
                { texto: 'No recuerdo cuándo comenzaron.', siguiente: 'resultado_revision_errores' }
            ]
        },

        // POSIBLE MALWARE

        malware_1: {
            titulo: '¿Qué comportamiento te hace sospechar de un virus o malware?',
            opciones: [
                { texto: 'Aparecen anuncios o ventanas emergentes desconocidas.', siguiente: 'malware_2' },
                { texto: 'Se instalaron programas que no reconozco.', siguiente: 'malware_3' },
                { texto: 'La computadora está muy lenta sin explicación.', siguiente: 'malware_4' },
                { texto: 'El antivirus muestra una advertencia.', siguiente: 'malware_5' },
                { texto: 'Mis archivos cambiaron o no puedo abrirlos.', siguiente: 'resultado_archivos_sospechosos' }
            ]
        },

        malware_2: {
            titulo: '¿Los anuncios aparecen principalmente dentro del navegador?',
            opciones: [
                { texto: 'Sí, aparecen al navegar por Internet.', siguiente: 'resultado_navegador_sospechoso' },
                { texto: 'No, también aparecen fuera del navegador.', siguiente: 'resultado_software_sospechoso' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_seguridad' }
            ]
        },

        malware_3: {
            titulo: '¿Los programas desconocidos aparecieron después de instalar otro software?',
            opciones: [
                { texto: 'Sí, aparecieron después de una instalación.', siguiente: 'resultado_software_sospechoso' },
                { texto: 'No, aparecieron sin una causa conocida.', siguiente: 'resultado_revision_seguridad' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_seguridad' }
            ]
        },

        malware_4: {
            titulo: '¿El antivirus detecta alguna amenaza al realizar un análisis?',
            opciones: [
                { texto: 'Sí, detecta una amenaza.', siguiente: 'resultado_amenaza_detectada' },
                { texto: 'No, no detecta amenazas.', siguiente: 'resultado_revision_seguridad' },
                { texto: 'Todavía no he realizado un análisis.', siguiente: 'resultado_analisis_seguridad' }
            ]
        },

        malware_5: {
            titulo: '¿La advertencia proviene del antivirus instalado o de una página web?',
            opciones: [
                { texto: 'Proviene del antivirus instalado en el sistema.', siguiente: 'resultado_amenaza_detectada' },
                { texto: 'Aparece como una ventana o anuncio del navegador.', siguiente: 'resultado_alerta_falsa' },
                { texto: 'No puedo identificar su origen.', siguiente: 'resultado_revision_seguridad' }
            ]
        }
    },

    resultados: {
        resultado_integridad_sistema: {
            titulo: 'Posible problema de archivos o componentes de Windows',
            descripcion: 'Los errores podrían relacionarse con archivos del sistema, servicios o configuraciones que no funcionan correctamente.',
            recomendaciones: [
                'Reinicia la computadora y comprueba si el problema continúa.',
                'Verifica si existen actualizaciones oficiales pendientes.',
                'Utiliza las herramientas de diagnóstico integradas en Windows.',
                'Realiza una copia de seguridad de tus archivos importantes.',
                'Solicita asistencia técnica antes de intentar reparaciones avanzadas.'
            ]
        },

        resultado_recursos_sistema: {
            titulo: 'Posible consumo elevado de recursos',
            descripcion: 'El funcionamiento incorrecto podría estar relacionado con el consumo excesivo de memoria, procesador o almacenamiento.',
            recomendaciones: [
                'Comprueba el uso de CPU, memoria y disco desde el Administrador de tareas.',
                'Cierra las aplicaciones innecesarias que reconozcas.',
                'Revisa los programas que se ejecutan automáticamente.',
                'Utiliza la categoría Rendimiento y lentitud para investigar el problema.'
            ]
        },

        resultado_revision_sistema: {
            titulo: 'Se necesita una revisión adicional del sistema operativo',
            descripcion: 'Las respuestas no permiten identificar una causa predominante. El problema podría relacionarse con software, controladores, configuración o hardware.',
            recomendaciones: [
                'Observa cuándo aparece el problema y qué aplicaciones están abiertas.',
                'Anota cualquier mensaje o código de error.',
                'Comprueba si existen actualizaciones oficiales pendientes.',
                'Realiza una copia de seguridad de tus archivos importantes.',
                'Solicita asistencia técnica si el problema continúa.'
            ]
        },

        resultado_configuracion_sistema: {
            titulo: 'Posible problema de configuración de Windows',
            descripcion: 'Una función específica del sistema podría estar afectada por su configuración, permisos o servicios relacionados.',
            recomendaciones: [
                'Identifica exactamente qué función presenta el problema.',
                'Comprueba si Windows muestra algún mensaje de error.',
                'Revisa las opciones de configuración relacionadas.',
                'Evita modificar servicios o el registro sin conocimientos técnicos.',
                'Solicita asistencia si el problema persiste.'
            ]
        },

        resultado_actualizacion_reciente: {
            titulo: 'Posible problema posterior a una actualización',
            descripcion: 'El problema podría estar relacionado con cambios introducidos por una actualización del sistema o incompatibilidades existentes.',
            recomendaciones: [
                'Comprueba la fecha de instalación de las actualizaciones recientes.',
                'Verifica si existen correcciones oficiales disponibles.',
                'Anota los errores que comenzaron después de actualizar.',
                'Respalda tus archivos antes de intentar opciones de recuperación.',
                'Solicita asistencia técnica antes de revertir actualizaciones importantes.'
            ]
        },

        resultado_inicio_sistema: {
            titulo: 'Posible problema de inicio de Windows',
            descripcion: 'El sistema operativo podría presentar dificultades para cargar sus componentes o acceder a los archivos necesarios.',
            recomendaciones: [
                'Comprueba si aparece algún mensaje de error durante el inicio.',
                'Evita reiniciar repetidamente el equipo si presenta errores graves.',
                'No formatees ni reinstales Windows sin respaldar tus archivos.',
                'Utiliza la categoría Encendido e inicio para un diagnóstico más específico.',
                'Solicita asistencia técnica si Windows no consigue iniciar.'
            ]
        },

        resultado_error_ocasional: {
            titulo: 'Error crítico aparentemente ocasional',
            descripcion: 'Una pantalla azul aislada no confirma una falla permanente, pero conviene observar si vuelve a presentarse.',
            recomendaciones: [
                'Anota el código de detención si vuelve a aparecer.',
                'Comprueba si existen actualizaciones oficiales pendientes.',
                'Observa si el equipo funciona normalmente después del reinicio.',
                'Realiza una copia de seguridad de tus archivos importantes.',
                'Solicita asistencia si el error se repite.'
            ]
        },

        resultado_controladores: {
            titulo: 'Posible incompatibilidad de controladores',
            descripcion: 'Los errores podrían relacionarse con un controlador instalado recientemente, una actualización o un dispositivo conectado.',
            recomendaciones: [
                'Identifica los controladores o dispositivos modificados recientemente.',
                'Comprueba si existen versiones oficiales compatibles.',
                'Evita instalar controladores desde páginas desconocidas.',
                'Anota el código de la pantalla azul si aparece.',
                'Solicita asistencia técnica antes de realizar cambios avanzados.'
            ]
        },

        resultado_estabilidad_hardware: {
            titulo: 'Posible problema de estabilidad del sistema o hardware',
            descripcion: 'Los errores durante tareas exigentes podrían relacionarse con temperatura, controladores, memoria o componentes de hardware.',
            recomendaciones: [
                'Evita temporalmente las aplicaciones que provocan el error.',
                'Comprueba si el equipo presenta temperaturas elevadas.',
                'Anota los códigos de error de Windows.',
                'Realiza una copia de seguridad de tus archivos importantes.',
                'Solicita una revisión técnica si los errores continúan.'
            ]
        },

        resultado_error_critico: {
            titulo: 'Errores críticos recurrentes de Windows',
            descripcion: 'Las pantallas azules frecuentes pueden indicar problemas de software, controladores o hardware que requieren una investigación adicional.',
            recomendaciones: [
                'Anota o fotografía el código de detención mostrado por Windows.',
                'Respalda tus archivos importantes si todavía puedes acceder al sistema.',
                'Evita seguir utilizando aplicaciones que provocan fallos repetidos.',
                'No reinstales el sistema sin comprobar antes el estado de tus datos.',
                'Solicita una revisión técnica para identificar la causa.'
            ]
        },

        resultado_compatibilidad: {
            titulo: 'Posible incompatibilidad de la aplicación',
            descripcion: 'La aplicación podría requerir una versión diferente de Windows, determinados componentes o características que el equipo no posee.',
            recomendaciones: [
                'Consulta los requisitos oficiales de la aplicación.',
                'Comprueba que tu versión de Windows sea compatible.',
                'Verifica que el equipo cumpla los requisitos mínimos.',
                'Utiliza únicamente versiones oficiales del programa.',
                'Contacta al desarrollador si el problema continúa.'
            ]
        },

        resultado_actualizacion_aplicacion: {
            titulo: 'Posible problema posterior a una actualización de la aplicación',
            descripcion: 'El cierre inesperado podría estar relacionado con una actualización, incompatibilidad o configuración del programa.',
            recomendaciones: [
                'Comprueba si existe una actualización correctiva oficial.',
                'Reinicia la aplicación y verifica si el problema continúa.',
                'Consulta los avisos de soporte del desarrollador.',
                'Respalda los datos importantes de la aplicación antes de reinstalarla.'
            ]
        },

        resultado_revision_aplicacion: {
            titulo: 'Se necesita revisar la aplicación afectada',
            descripcion: 'El problema podría estar relacionado con la instalación, configuración, compatibilidad o consumo de recursos de la aplicación.',
            recomendaciones: [
                'Comprueba si otras aplicaciones funcionan normalmente.',
                'Anota cualquier mensaje de error.',
                'Verifica si existen actualizaciones oficiales.',
                'Consulta la documentación del programa.',
                'Solicita asistencia si el problema persiste.'
            ]
        },

        resultado_instalacion_aplicacion: {
            titulo: 'Posible problema de instalación de la aplicación',
            descripcion: 'La aplicación podría presentar archivos faltantes, componentes dañados o dificultades relacionadas con su instalación.',
            recomendaciones: [
                'Comprueba que la aplicación provenga de una fuente oficial.',
                'Verifica si dispone de una opción de reparación.',
                'Consulta los requisitos y dependencias del programa.',
                'Respalda los archivos y configuraciones importantes antes de reinstalar.',
                'Evita descargar archivos DLL individuales desde sitios desconocidos.'
            ]
        },

        resultado_permisos_aplicacion: {
            titulo: 'Posible problema de permisos de la aplicación',
            descripcion: 'La aplicación podría no tener los permisos necesarios para acceder a determinados archivos o funciones.',
            recomendaciones: [
                'Comprueba el mensaje exacto de acceso denegado.',
                'Verifica que tu cuenta tenga permisos para utilizar la aplicación.',
                'Consulta la documentación oficial del programa.',
                'No desactives las protecciones de Windows para solucionar el problema.',
                'Solicita asistencia si necesitas permisos administrativos.'
            ]
        },

        resultado_error_actualizacion: {
            titulo: 'Posible problema de Windows Update',
            descripcion: 'La actualización podría estar fallando por dificultades de descarga, componentes del sistema o requisitos pendientes.',
            recomendaciones: [
                'Anota el código de error si aparece.',
                'Comprueba que la conexión a Internet funcione.',
                'Verifica que exista suficiente espacio disponible.',
                'Utiliza el solucionador de problemas de Windows Update si está disponible.',
                'Solicita asistencia técnica si las actualizaciones continúan fallando.'
            ]
        },

        resultado_conexion_actualizacion: {
            titulo: 'Posible problema de conexión durante las actualizaciones',
            descripcion: 'Una conexión inestable podría impedir que Windows descargue correctamente las actualizaciones.',
            recomendaciones: [
                'Comprueba que Internet funcione en otras aplicaciones.',
                'Evita interrumpir descargas de actualizaciones.',
                'Utiliza una conexión estable cuando sea posible.',
                'Consulta la categoría Internet y conectividad para investigar la conexión.'
            ]
        },

        resultado_actualizacion_pendiente: {
            titulo: 'Posible actualización incompleta o pendiente',
            descripcion: 'Las solicitudes repetidas de reinicio podrían indicar que una actualización no termina de aplicarse correctamente.',
            recomendaciones: [
                'Comprueba el historial de actualizaciones.',
                'Verifica si Windows muestra errores pendientes.',
                'Evita apagar el equipo mientras se están aplicando actualizaciones.',
                'Realiza una copia de seguridad de tus archivos importantes.',
                'Solicita asistencia si el ciclo de reinicios continúa.'
            ]
        },

        resultado_reinicio_actualizacion: {
            titulo: 'Reinicio necesario para completar una actualización',
            descripcion: 'Windows puede solicitar un reinicio para finalizar la instalación de actualizaciones. Esto es normal cuando no existen errores adicionales.',
            recomendaciones: [
                'Guarda tu trabajo y cierra las aplicaciones abiertas.',
                'Conecta la laptop a una fuente de alimentación, si corresponde.',
                'Reinicia el equipo desde las opciones normales de Windows.',
                'Comprueba el estado de las actualizaciones después de iniciar sesión.'
            ]
        },

        resultado_espacio_actualizacion: {
            titulo: 'Posible falta de espacio para actualizar Windows',
            descripcion: 'Las actualizaciones pueden necesitar espacio libre para descargar e instalar archivos temporales.',
            recomendaciones: [
                'Comprueba el espacio disponible en la unidad principal.',
                'Utiliza las herramientas de limpieza de almacenamiento de Windows.',
                'Desinstala aplicaciones que ya no utilices.',
                'Respalda los archivos importantes antes de eliminar información.',
                'Vuelve a intentar la actualización cuando dispongas de espacio suficiente.'
            ]
        },

        resultado_perfil_usuario: {
            titulo: 'Posible problema del perfil de usuario',
            descripcion: 'Windows podría presentar dificultades para cargar los archivos o la configuración del perfil asociado a la cuenta.',
            recomendaciones: [
                'Anota el mensaje exacto mostrado durante el inicio de sesión.',
                'Evita eliminar o reemplazar carpetas del perfil manualmente.',
                'Respalda tus archivos si todavía puedes acceder a ellos.',
                'Solicita asistencia técnica para revisar el perfil sin perder información.'
            ]
        },

        resultado_cuenta_microsoft: {
            titulo: 'Posible problema de acceso a la cuenta de Microsoft',
            descripcion: 'El inicio de sesión podría estar afectado por credenciales incorrectas, problemas de conexión o mecanismos de verificación de la cuenta.',
            recomendaciones: [
                'Comprueba que estás utilizando la cuenta correcta.',
                'Verifica la conexión a Internet cuando sea necesaria.',
                'Utiliza las opciones oficiales de recuperación de cuenta de Microsoft.',
                'No compartas contraseñas ni códigos de verificación con terceros.',
                'Evita herramientas no oficiales para desbloquear cuentas.'
            ]
        },

        resultado_cuenta_local: {
            titulo: 'Posible problema de acceso a una cuenta local',
            descripcion: 'El problema podría relacionarse con la contraseña, el PIN o la configuración de inicio de sesión del equipo.',
            recomendaciones: [
                'Comprueba la distribución del teclado y las teclas de mayúsculas.',
                'Verifica si Windows ofrece opciones de recuperación autorizadas.',
                'Consulta al administrador del equipo si corresponde.',
                'Evita herramientas desconocidas para modificar contraseñas.',
                'Solicita asistencia técnica si no puedes recuperar el acceso.'
            ]
        },

        resultado_revision_sesion: {
            titulo: 'Se necesita revisar el inicio de sesión',
            descripcion: 'Las respuestas todavía no permiten determinar si el problema está relacionado con la cuenta, las credenciales o Windows.',
            recomendaciones: [
                'Anota el mensaje de error mostrado.',
                'Comprueba qué tipo de cuenta utilizas.',
                'Utiliza únicamente mecanismos oficiales de recuperación.',
                'No compartas contraseñas o códigos de seguridad.',
                'Solicita asistencia si el problema continúa.'
            ]
        },

        resultado_inicio_aplicaciones: {
            titulo: 'Posible error de una aplicación de inicio',
            descripcion: 'Un programa configurado para ejecutarse al iniciar Windows podría estar generando el mensaje de error.',
            recomendaciones: [
                'Anota el nombre de la aplicación mencionada.',
                'Comprueba si existe una actualización oficial.',
                'Revisa las aplicaciones de inicio desde el Administrador de tareas.',
                'Evita deshabilitar servicios desconocidos del sistema.',
                'Solicita asistencia si el error persiste.'
            ]
        },

        resultado_revision_errores: {
            titulo: 'Se necesita identificar el mensaje de error',
            descripcion: 'Para investigar el problema es importante conocer el texto o código exacto del mensaje y el momento en que aparece.',
            recomendaciones: [
                'Anota o fotografía el mensaje de error.',
                'Identifica qué aplicación o función estabas utilizando.',
                'Comprueba si el error aparece después de reiniciar.',
                'Evita instalar herramientas de reparación desconocidas.',
                'Solicita asistencia técnica proporcionando el mensaje exacto.'
            ]
        },

        resultado_conflicto_software: {
            titulo: 'Posible conflicto entre programas o actualizaciones',
            descripcion: 'Los errores podrían estar relacionados con software instalado recientemente, controladores o configuraciones incompatibles.',
            recomendaciones: [
                'Identifica los programas instalados o actualizados recientemente.',
                'Comprueba si existen actualizaciones correctivas oficiales.',
                'Evita instalar varias herramientas de reparación simultáneamente.',
                'Respalda tus datos antes de desinstalar programas importantes.',
                'Solicita asistencia si no puedes identificar el conflicto.'
            ]
        },

        resultado_navegador_sospechoso: {
            titulo: 'Posible software no deseado en el navegador',
            descripcion: 'Los anuncios inesperados podrían estar relacionados con extensiones, permisos de notificaciones o programas no deseados. No confirman por sí solos una infección.',
            recomendaciones: [
                'Revisa las extensiones instaladas en el navegador.',
                'Comprueba qué sitios tienen permiso para enviar notificaciones.',
                'Evita hacer clic en anuncios o advertencias sospechosas.',
                'Actualiza el navegador desde su fuente oficial.',
                'Realiza un análisis con una herramienta de seguridad confiable.'
            ]
        },

        resultado_software_sospechoso: {
            titulo: 'Posible presencia de software no deseado',
            descripcion: 'Los programas desconocidos o ventanas inesperadas podrían estar relacionados con aplicaciones potencialmente no deseadas.',
            recomendaciones: [
                'Revisa la lista de aplicaciones instaladas.',
                'Evita abrir programas que no reconozcas.',
                'Realiza un análisis con Microsoft Defender u otra herramienta de seguridad confiable.',
                'No elimines archivos del sistema manualmente.',
                'Solicita asistencia si el comportamiento continúa.'
            ]
        },

        resultado_revision_seguridad: {
            titulo: 'Se necesita una revisión de seguridad',
            descripcion: 'Los síntomas podrían tener distintas causas y no permiten confirmar la presencia de malware.',
            recomendaciones: [
                'Actualiza las definiciones de seguridad del antivirus.',
                'Realiza un análisis completo del sistema.',
                'Comprueba las aplicaciones y extensiones instaladas.',
                'Evita descargar supuestas herramientas de limpieza de páginas desconocidas.',
                'Solicita asistencia si encuentras amenazas o comportamientos persistentes.'
            ]
        },

        resultado_analisis_seguridad: {
            titulo: 'Se recomienda realizar un análisis de seguridad',
            descripcion: 'La lentitud sin una causa clara no confirma una infección. Un análisis de seguridad puede ayudar a descartar amenazas conocidas.',
            recomendaciones: [
                'Abre Seguridad de Windows y comprueba el estado de Microsoft Defender.',
                'Actualiza las definiciones de protección.',
                'Realiza un análisis completo del equipo.',
                'Revisa los resultados antes de tomar medidas.',
                'Solicita asistencia si se detecta una amenaza que no puede eliminarse.'
            ]
        },

        resultado_amenaza_detectada: {
            titulo: 'Posible amenaza de seguridad detectada',
            descripcion: 'Una advertencia del antivirus podría indicar software malicioso o potencialmente no deseado. Es importante revisar el resultado específico.',
            recomendaciones: [
                'Comprueba el nombre y los detalles de la detección.',
                'Sigue las opciones de protección recomendadas por el antivirus confiable.',
                'Evita abrir archivos sospechosos o ejecutar programas desconocidos.',
                'Actualiza el sistema y las herramientas de seguridad.',
                'Solicita asistencia si la amenaza reaparece o no puede eliminarse.'
            ]
        },

        resultado_alerta_falsa: {
            titulo: 'Posible advertencia de seguridad engañosa',
            descripcion: 'Algunas páginas muestran alertas falsas para convencer al usuario de descargar programas, llamar a números desconocidos o compartir información.',
            recomendaciones: [
                'No hagas clic en botones ni enlaces de la advertencia.',
                'No llames a números mostrados en ventanas sospechosas.',
                'Cierra la pestaña o el navegador si es posible.',
                'Comprueba el estado de seguridad desde Windows, no desde la página.',
                'Revisa los permisos de notificaciones del navegador.'
            ]
        },

        resultado_archivos_sospechosos: {
            titulo: 'Posible incidente de seguridad que afecta a los archivos',
            descripcion: 'Los archivos inaccesibles o modificados inesperadamente podrían relacionarse con corrupción de datos, fallas de almacenamiento o malware, incluido ransomware.',
            recomendaciones: [
                'Evita modificar o eliminar los archivos afectados.',
                'Si sospechas de ransomware activo, desconecta el equipo de Internet y de unidades compartidas.',
                'No conectes dispositivos de respaldo al equipo sospechoso.',
                'No pagues ni contactes a desconocidos que prometan recuperar archivos.',
                'Solicita asistencia especializada para proteger los datos e investigar el incidente.'
            ]
        }
    }
};

export default software;