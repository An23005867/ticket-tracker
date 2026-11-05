
const conectividad = {
    inicio: 'conectividad_1',

    preguntas: {
        conectividad_1: {
            titulo: '¿Qué problema de conexión presenta tu computadora?',
            opciones: [
                { texto: 'No tengo acceso a Internet.', siguiente: 'sin_internet_1' },
                { texto: 'No puedo conectarme a una red Wi-Fi.', siguiente: 'wifi_1' },
                { texto: 'La conexión a Internet es demasiado lenta.', siguiente: 'lentitud_1' },
                { texto: 'Internet se desconecta constantemente.', siguiente: 'desconexion_1' },
                { texto: 'La conexión mediante cable Ethernet no funciona.', siguiente: 'ethernet_1' },
                { texto: 'Algunas páginas o servicios no funcionan.', siguiente: 'paginas_1' }
            ]
        },

        // SIN ACCESO A INTERNET

        sin_internet_1: {
            titulo: '¿Cómo está conectada tu computadora a la red?',
            opciones: [
                { texto: 'Mediante Wi-Fi.', siguiente: 'sin_internet_2' },
                { texto: 'Mediante cable Ethernet.', siguiente: 'ethernet_1' },
                { texto: 'No aparece ninguna conexión disponible.', siguiente: 'sin_internet_4' }
            ]
        },

        sin_internet_2: {
            titulo: '¿La computadora aparece conectada al Wi-Fi, pero indica que no tiene Internet?',
            opciones: [
                { texto: 'Sí, está conectada, pero sin acceso a Internet.', siguiente: 'sin_internet_3' },
                { texto: 'No, ni siquiera consigue conectarse al Wi-Fi.', siguiente: 'wifi_1' },
                { texto: 'La conexión aparece y desaparece.', siguiente: 'desconexion_1' }
            ]
        },

        sin_internet_3: {
            titulo: '¿Otros dispositivos conectados a la misma red pueden acceder a Internet?',
            opciones: [
                { texto: 'Sí, otros dispositivos funcionan correctamente.', siguiente: 'resultado_configuracion_red' },
                { texto: 'No, ninguno tiene acceso a Internet.', siguiente: 'resultado_router_proveedor' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_red' }
            ]
        },

        sin_internet_4: {
            titulo: '¿Qué tipo de conexión intentas utilizar?',
            opciones: [
                { texto: 'Wi-Fi.', siguiente: 'wifi_2' },
                { texto: 'Ethernet.', siguiente: 'ethernet_2' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_red' }
            ]
        },

        // WI-FI

        wifi_1: {
            titulo: '¿Qué sucede cuando intentas conectarte a una red Wi-Fi?',
            opciones: [
                { texto: 'La red Wi-Fi no aparece en la lista.', siguiente: 'wifi_2' },
                { texto: 'La red aparece, pero no puedo conectarme.', siguiente: 'wifi_3' },
                { texto: 'Se conecta, pero no tiene acceso a Internet.', siguiente: 'sin_internet_3' }
            ]
        },

        wifi_2: {
            titulo: '¿La computadora puede detectar otras redes Wi-Fi cercanas?',
            opciones: [
                { texto: 'Sí, detecta otras redes, pero no la mía.', siguiente: 'resultado_router_wifi' },
                { texto: 'No, no detecta ninguna red.', siguiente: 'wifi_4' },
                { texto: 'No estoy seguro.', siguiente: 'wifi_4' }
            ]
        },

        wifi_3: {
            titulo: '¿El sistema muestra un error relacionado con la contraseña o autenticación?',
            opciones: [
                { texto: 'Sí, indica que la contraseña es incorrecta.', siguiente: 'resultado_autenticacion' },
                { texto: 'No, muestra otro error de conexión.', siguiente: 'wifi_5' },
                { texto: 'No muestra ningún mensaje claro.', siguiente: 'wifi_5' }
            ]
        },

        wifi_4: {
            titulo: '¿El Wi-Fi está activado y el modo avión está desactivado?',
            opciones: [
                { texto: 'Sí, ambos están configurados correctamente.', siguiente: 'resultado_adaptador_wifi' },
                { texto: 'No, el Wi-Fi está desactivado o el modo avión activado.', siguiente: 'resultado_activar_wifi' },
                { texto: 'No encuentro la opción para activar Wi-Fi.', siguiente: 'resultado_adaptador_wifi' }
            ]
        },

        wifi_5: {
            titulo: '¿Otros dispositivos pueden conectarse a esa misma red Wi-Fi?',
            opciones: [
                { texto: 'Sí, otros dispositivos se conectan.', siguiente: 'resultado_configuracion_red' },
                { texto: 'No, también presentan dificultades.', siguiente: 'resultado_router_wifi' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_red' }
            ]
        },

        // INTERNET LENTO

        lentitud_1: {
            titulo: '¿La conexión es lenta en todos los dispositivos o solamente en tu computadora?',
            opciones: [
                { texto: 'Solamente en mi computadora.', siguiente: 'lentitud_2' },
                { texto: 'En todos los dispositivos.', siguiente: 'resultado_router_proveedor' },
                { texto: 'No estoy seguro.', siguiente: 'lentitud_2' }
            ]
        },

        lentitud_2: {
            titulo: '¿Cómo está conectada la computadora?',
            opciones: [
                { texto: 'Por Wi-Fi.', siguiente: 'lentitud_3' },
                { texto: 'Por cable Ethernet.', siguiente: 'lentitud_4' }
            ]
        },

        lentitud_3: {
            titulo: '¿La conexión mejora cuando acercas la computadora al router?',
            opciones: [
                { texto: 'Sí, mejora considerablemente.', siguiente: 'resultado_senal_wifi' },
                { texto: 'No, continúa lenta.', siguiente: 'lentitud_5' },
                { texto: 'No puedo realizar esa comprobación.', siguiente: 'lentitud_5' }
            ]
        },

        lentitud_4: {
            titulo: '¿Has comprobado que el cable Ethernet esté correctamente conectado y no presente daños visibles?',
            opciones: [
                { texto: 'Sí, parece estar en buen estado.', siguiente: 'lentitud_5' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_cable_ethernet' },
                { texto: 'El cable o conector parece estar dañado.', siguiente: 'resultado_cable_ethernet' }
            ]
        },

        lentitud_5: {
            titulo: '¿La lentitud aparece principalmente cuando descargas archivos o utilizas varias aplicaciones conectadas?',
            opciones: [
                { texto: 'Sí, principalmente cuando hay mucho consumo de Internet.', siguiente: 'resultado_saturacion' },
                { texto: 'No, la conexión es lenta incluso sin mucha actividad.', siguiente: 'resultado_revision_velocidad' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_velocidad' }
            ]
        },

        // DESCONEXIONES

        desconexion_1: {
            titulo: '¿La conexión que se interrumpe es Wi-Fi o Ethernet?',
            opciones: [
                { texto: 'Wi-Fi.', siguiente: 'desconexion_2' },
                { texto: 'Ethernet.', siguiente: 'desconexion_3' },
                { texto: 'Ambas conexiones.', siguiente: 'resultado_router_proveedor' }
            ]
        },

        desconexion_2: {
            titulo: '¿Las desconexiones son más frecuentes cuando estás lejos del router?',
            opciones: [
                { texto: 'Sí, principalmente cuando estoy lejos.', siguiente: 'resultado_senal_wifi' },
                { texto: 'No, también ocurren cerca del router.', siguiente: 'desconexion_4' },
                { texto: 'No estoy seguro.', siguiente: 'desconexion_4' }
            ]
        },

        desconexion_3: {
            titulo: '¿La conexión Ethernet se interrumpe al mover el cable o su conector?',
            opciones: [
                { texto: 'Sí, al moverlo se pierde la conexión.', siguiente: 'resultado_cable_ethernet' },
                { texto: 'No, se interrumpe sin moverlo.', siguiente: 'desconexion_4' },
                { texto: 'No estoy seguro.', siguiente: 'desconexion_4' }
            ]
        },

        desconexion_4: {
            titulo: '¿Otros dispositivos conectados a la misma red también se desconectan?',
            opciones: [
                { texto: 'Sí, también se desconectan.', siguiente: 'resultado_router_proveedor' },
                { texto: 'No, solamente mi computadora.', siguiente: 'resultado_adaptador_red' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_red' }
            ]
        },

        // ETHERNET

        ethernet_1: {
            titulo: '¿Qué sucede cuando conectas el cable Ethernet?',
            opciones: [
                { texto: 'La computadora no reconoce ninguna conexión.', siguiente: 'ethernet_2' },
                { texto: 'Reconoce la conexión, pero no tiene Internet.', siguiente: 'ethernet_3' },
                { texto: 'La conexión funciona de manera intermitente.', siguiente: 'desconexion_3' }
            ]
        },

        ethernet_2: {
            titulo: '¿Has comprobado que el cable esté bien conectado y no tenga daños visibles?',
            opciones: [
                { texto: 'Sí, pero sigue sin reconocer la conexión.', siguiente: 'ethernet_4' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_cable_ethernet' },
                { texto: 'El cable o conector parece estar dañado.', siguiente: 'resultado_cable_ethernet' }
            ]
        },

        ethernet_3: {
            titulo: '¿Otros dispositivos conectados al mismo router pueden acceder a Internet?',
            opciones: [
                { texto: 'Sí, otros dispositivos funcionan.', siguiente: 'resultado_configuracion_red' },
                { texto: 'No, tampoco tienen Internet.', siguiente: 'resultado_router_proveedor' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_red' }
            ]
        },

        ethernet_4: {
            titulo: '¿El adaptador Ethernet aparece habilitado en la configuración del sistema?',
            opciones: [
                { texto: 'Sí, aparece habilitado.', siguiente: 'resultado_adaptador_red' },
                { texto: 'No, aparece deshabilitado.', siguiente: 'resultado_habilitar_ethernet' },
                { texto: 'No aparece ningún adaptador Ethernet.', siguiente: 'resultado_adaptador_red' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_adaptador_red' }
            ]
        },

        // PÁGINAS Y SERVICIOS

        paginas_1: {
            titulo: '¿El problema ocurre en todas las páginas o solamente en algunas?',
            opciones: [
                { texto: 'Solamente en algunas páginas o servicios.', siguiente: 'paginas_2' },
                { texto: 'En prácticamente todas las páginas.', siguiente: 'sin_internet_1' }
            ]
        },

        paginas_2: {
            titulo: '¿Las páginas afectadas funcionan desde otro dispositivo conectado a la misma red?',
            opciones: [
                { texto: 'Sí, funcionan desde otro dispositivo.', siguiente: 'paginas_3' },
                { texto: 'No, tampoco funcionan desde otros dispositivos.', siguiente: 'resultado_servicio_dns' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_servicio_dns' }
            ]
        },

        paginas_3: {
            titulo: '¿El problema también ocurre al utilizar otro navegador?',
            opciones: [
                { texto: 'Sí, ocurre con diferentes navegadores.', siguiente: 'resultado_servicio_dns' },
                { texto: 'No, solamente ocurre con un navegador.', siguiente: 'resultado_navegador' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_navegador' }
            ]
        }
    },

    resultados: {
        resultado_configuracion_red: {
            titulo: 'Posible problema de configuración de red',
            descripcion: 'La computadora podría presentar una dificultad de configuración, direccionamiento IP o comunicación con el router.',
            recomendaciones: [
                'Reinicia la conexión Wi-Fi o Ethernet desde el sistema.',
                'Comprueba que el adaptador de red esté habilitado.',
                'Revisa si la configuración IP y DNS corresponde a tu red.',
                'Utiliza las herramientas de diagnóstico de red del sistema.',
                'Solicita asistencia técnica si el problema continúa.'
            ]
        },

        resultado_router_proveedor: {
            titulo: 'Posible problema del router o proveedor de Internet',
            descripcion: 'Si varios dispositivos presentan el mismo problema, la causa podría estar relacionada con el router, la red local o el proveedor de Internet.',
            recomendaciones: [
                'Comprueba las luces indicadoras del router.',
                'Verifica si el proveedor ha informado alguna interrupción del servicio.',
                'Reinicia el router siguiendo las indicaciones del fabricante, si es seguro hacerlo.',
                'Evita restaurar el router a valores de fábrica sin conocer su configuración.',
                'Contacta a tu proveedor si el problema persiste.'
            ]
        },

        resultado_revision_red: {
            titulo: 'Se necesita una revisión adicional de la conexión',
            descripcion: 'Las respuestas todavía no permiten determinar si el problema está en la computadora, el router o el proveedor.',
            recomendaciones: [
                'Comprueba si otros dispositivos presentan el mismo problema.',
                'Observa si ocurre mediante Wi-Fi, Ethernet o ambas conexiones.',
                'Revisa el estado de conexión mostrado por el sistema.',
                'Solicita asistencia técnica si el problema continúa.'
            ]
        },

        resultado_router_wifi: {
            titulo: 'Posible problema de la red Wi-Fi',
            descripcion: 'La red inalámbrica podría presentar dificultades de emisión, compatibilidad, alcance o configuración.',
            recomendaciones: [
                'Comprueba que el router tenga activada la red Wi-Fi.',
                'Verifica que otros dispositivos puedan encontrar y utilizar la red.',
                'Comprueba que el equipo sea compatible con la banda y seguridad configuradas.',
                'Consulta la configuración del router o solicita ayuda a tu proveedor.'
            ]
        },

        resultado_autenticacion: {
            titulo: 'Posible problema de autenticación Wi-Fi',
            descripcion: 'La computadora podría estar utilizando una contraseña incorrecta o una configuración de seguridad incompatible.',
            recomendaciones: [
                'Comprueba cuidadosamente la contraseña de la red.',
                'Verifica que estés seleccionando la red correcta.',
                'Olvida la red guardada y vuelve a conectarte con la contraseña actual, si la conoces.',
                'Consulta con el administrador de la red si el problema continúa.'
            ]
        },

        resultado_adaptador_wifi: {
            titulo: 'Posible problema del adaptador Wi-Fi',
            descripcion: 'La ausencia de redes disponibles podría estar relacionada con el adaptador inalámbrico, su controlador o la configuración del sistema.',
            recomendaciones: [
                'Comprueba que tu computadora disponga de un adaptador Wi-Fi.',
                'Verifica que el adaptador aparezca habilitado en el sistema.',
                'Revisa el Administrador de dispositivos si utilizas Windows.',
                'Comprueba si existen controladores oficiales actualizados.',
                'Solicita una revisión técnica si el adaptador no aparece.'
            ]
        },

        resultado_activar_wifi: {
            titulo: 'Revisar la activación de Wi-Fi',
            descripcion: 'El adaptador inalámbrico podría estar desactivado o limitado por el modo avión.',
            recomendaciones: [
                'Desactiva el modo avión.',
                'Activa Wi-Fi desde la configuración de red.',
                'Comprueba si tu equipo dispone de una tecla o interruptor inalámbrico.',
                'Busca nuevamente las redes disponibles.'
            ]
        },

        resultado_senal_wifi: {
            titulo: 'Posible señal Wi-Fi débil o interferencias',
            descripcion: 'La distancia, los obstáculos y las interferencias pueden reducir la estabilidad y velocidad de la conexión inalámbrica.',
            recomendaciones: [
                'Acerca el equipo al router cuando sea posible.',
                'Evita obstáculos grandes entre la computadora y el router.',
                'Comprueba si existen interferencias de otros dispositivos.',
                'Considera utilizar Ethernet cuando necesites una conexión más estable.',
                'Consulta alternativas para mejorar la cobertura inalámbrica.'
            ]
        },

        resultado_cable_ethernet: {
            titulo: 'Posible problema de cable o conexión Ethernet',
            descripcion: 'La conexión podría verse afectada por un cable defectuoso, un conector dañado o una conexión incorrecta.',
            recomendaciones: [
                'Comprueba ambos extremos del cable Ethernet.',
                'Verifica que los conectores no tengan daños visibles.',
                'Prueba otro cable compatible si está disponible.',
                'Comprueba otro puerto del router si es posible.',
                'Solicita una revisión técnica si el puerto del equipo parece dañado.'
            ]
        },

        resultado_saturacion: {
            titulo: 'Posible saturación de la conexión',
            descripcion: 'Las descargas, transmisiones y aplicaciones que consumen mucho ancho de banda podrían estar afectando el rendimiento de Internet.',
            recomendaciones: [
                'Comprueba si existen descargas o actualizaciones en segundo plano.',
                'Observa cuántos dispositivos están utilizando la red.',
                'Pausa temporalmente las actividades de alto consumo para comparar.',
                'Realiza una prueba de velocidad en condiciones controladas.',
                'Consulta con tu proveedor si la velocidad es persistentemente inferior a la contratada.'
            ]
        },

        resultado_revision_velocidad: {
            titulo: 'Se necesita revisar la velocidad de conexión',
            descripcion: 'La lentitud podría estar relacionada con el adaptador, la red local, la configuración o el proveedor.',
            recomendaciones: [
                'Realiza pruebas de velocidad en diferentes momentos.',
                'Compara los resultados con otro dispositivo conectado a la misma red.',
                'Comprueba si existen aplicaciones consumiendo ancho de banda.',
                'Revisa los controladores oficiales del adaptador de red.',
                'Contacta a tu proveedor si el problema afecta a varios dispositivos.'
            ]
        },

        resultado_adaptador_red: {
            titulo: 'Posible problema del adaptador de red',
            descripcion: 'Las desconexiones o la falta de detección podrían relacionarse con el adaptador, sus controladores o el puerto de conexión.',
            recomendaciones: [
                'Comprueba que el adaptador esté habilitado.',
                'Revisa si el sistema muestra errores del dispositivo.',
                'Comprueba si existen controladores oficiales actualizados.',
                'Prueba otro cable o conexión cuando corresponda.',
                'Solicita una revisión técnica si el problema continúa.'
            ]
        },

        resultado_habilitar_ethernet: {
            titulo: 'Adaptador Ethernet deshabilitado',
            descripcion: 'El adaptador de red podría estar desactivado desde la configuración del sistema.',
            recomendaciones: [
                'Abre la configuración de conexiones de red.',
                'Busca el adaptador Ethernet.',
                'Habilítalo si aparece desactivado y tienes permiso para hacerlo.',
                'Comprueba nuevamente si el sistema reconoce la conexión.'
            ]
        },

        resultado_servicio_dns: {
            titulo: 'Posible problema de DNS o disponibilidad del servicio',
            descripcion: 'Las dificultades para abrir determinadas páginas podrían relacionarse con la resolución de nombres, el servicio remoto o la configuración de la red.',
            recomendaciones: [
                'Comprueba si otras páginas funcionan normalmente.',
                'Verifica si el servicio afectado ha informado una interrupción.',
                'Prueba acceder desde otro navegador o dispositivo.',
                'Revisa la configuración DNS si tienes conocimientos para hacerlo.',
                'Consulta con el administrador de la red si el problema persiste.'
            ]
        },

        resultado_navegador: {
            titulo: 'Posible problema del navegador',
            descripcion: 'Si el problema ocurre solamente en un navegador, podría estar relacionado con sus extensiones, datos almacenados o configuración.',
            recomendaciones: [
                'Comprueba si el navegador tiene actualizaciones pendientes.',
                'Prueba una ventana privada para descartar algunas extensiones o datos de sesión.',
                'Revisa las extensiones instaladas.',
                'Considera borrar únicamente los datos del sitio afectado, teniendo en cuenta que podrías cerrar sesiones.',
                'Comprueba nuevamente si la página funciona.'
            ]
        }
    }
};

export default conectividad;