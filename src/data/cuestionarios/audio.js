
const audio = {
    inicio: 'audio_1',

    preguntas: {
        audio_1: {
            titulo: '¿Qué problema de audio presenta tu computadora?',
            opciones: [
                { texto: 'No se escucha ningún sonido.', siguiente: 'sin_sonido_1' },
                { texto: 'El sonido se escucha distorsionado o con ruidos.', siguiente: 'distorsion_1' },
                { texto: 'Mis auriculares no funcionan correctamente.', siguiente: 'auriculares_1' },
                { texto: 'El micrófono no funciona.', siguiente: 'microfono_1' },
                { texto: 'El volumen es demasiado bajo.', siguiente: 'volumen_1' },
                { texto: 'El audio se corta o se interrumpe.', siguiente: 'interrupcion_1' }
            ]
        },

        // SIN SONIDO

        sin_sonido_1: {
            titulo: '¿El problema ocurre en todas las aplicaciones?',
            opciones: [
                { texto: 'Sí, ninguna aplicación reproduce sonido.', siguiente: 'sin_sonido_2' },
                { texto: 'No, solamente ocurre en una aplicación.', siguiente: 'resultado_aplicacion' },
                { texto: 'No estoy seguro.', siguiente: 'sin_sonido_2' }
            ]
        },

        sin_sonido_2: {
            titulo: '¿El volumen está activado y el equipo no está silenciado?',
            opciones: [
                { texto: 'Sí, el volumen está activado.', siguiente: 'sin_sonido_3' },
                { texto: 'No, está silenciado o el volumen está al mínimo.', siguiente: 'resultado_volumen' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_volumen' }
            ]
        },

        sin_sonido_3: {
            titulo: '¿Qué dispositivo utilizas para escuchar el sonido?',
            opciones: [
                { texto: 'Altavoces integrados del equipo.', siguiente: { laptop: 'integrados_1', desktop: 'salida_1' } },
                { texto: 'Altavoces externos.', siguiente: 'externos_1' },
                { texto: 'Auriculares.', siguiente: 'auriculares_1' }
            ]
        },

        integrados_1: {
            titulo: '¿Los altavoces integrados aparecen seleccionados como dispositivo de salida?',
            opciones: [
                { texto: 'Sí, están seleccionados.', siguiente: 'integrados_2' },
                { texto: 'No, está seleccionado otro dispositivo.', siguiente: 'resultado_salida' },
                { texto: 'No aparecen entre los dispositivos disponibles.', siguiente: 'resultado_controlador' }
            ]
        },

        integrados_2: {
            titulo: '¿El sonido funciona al conectar unos auriculares compatibles?',
            opciones: [
                { texto: 'Sí, los auriculares funcionan.', siguiente: 'resultado_altavoces' },
                { texto: 'No, tampoco funcionan.', siguiente: 'resultado_controlador' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_audio' }
            ]
        },

        salida_1: {
            titulo: '¿El dispositivo de salida correcto está seleccionado en el sistema?',
            opciones: [
                { texto: 'Sí, está seleccionado correctamente.', siguiente: 'externos_1' },
                { texto: 'No, aparece seleccionado otro dispositivo.', siguiente: 'resultado_salida' },
                { texto: 'No aparece ningún dispositivo de salida.', siguiente: 'resultado_controlador' }
            ]
        },

        externos_1: {
            titulo: '¿Los altavoces externos están encendidos y conectados correctamente?',
            opciones: [
                { texto: 'Sí, están encendidos y conectados.', siguiente: 'externos_2' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_conexion_audio' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_conexion_audio' }
            ]
        },

        externos_2: {
            titulo: '¿Los altavoces funcionan al conectarlos a otro dispositivo compatible?',
            opciones: [
                { texto: 'Sí, funcionan en otro dispositivo.', siguiente: 'resultado_salida' },
                { texto: 'No, tampoco funcionan en otro dispositivo.', siguiente: 'resultado_altavoces' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_audio' }
            ]
        },

        // DISTORSIÓN

        distorsion_1: {
            titulo: '¿La distorsión aparece solamente cuando el volumen está muy alto?',
            opciones: [
                { texto: 'Sí, principalmente con volumen elevado.', siguiente: 'resultado_distorsion_volumen' },
                { texto: 'No, también ocurre con volumen bajo.', siguiente: 'distorsion_2' },
                { texto: 'No estoy seguro.', siguiente: 'distorsion_2' }
            ]
        },

        distorsion_2: {
            titulo: '¿El problema también ocurre al utilizar otros auriculares o altavoces?',
            opciones: [
                { texto: 'Sí, ocurre con diferentes dispositivos.', siguiente: 'resultado_controlador' },
                { texto: 'No, solamente con un dispositivo.', siguiente: 'resultado_altavoces' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_audio' }
            ]
        },

        // AURICULARES

        auriculares_1: {
            titulo: '¿Cómo conectas los auriculares a tu computadora?',
            opciones: [
                { texto: 'Mediante cable de audio o USB.', siguiente: 'auriculares_2' },
                { texto: 'Mediante Bluetooth.', siguiente: 'auriculares_4' }
            ]
        },

        auriculares_2: {
            titulo: '¿La computadora reconoce los auriculares cuando los conectas?',
            opciones: [
                { texto: 'Sí, aparecen como dispositivo de audio.', siguiente: 'auriculares_3' },
                { texto: 'No, no aparecen entre los dispositivos.', siguiente: 'resultado_conexion_audio' },
                { texto: 'La conexión aparece y desaparece.', siguiente: 'resultado_conexion_audio' }
            ]
        },

        auriculares_3: {
            titulo: '¿Los auriculares están seleccionados como dispositivo de salida?',
            opciones: [
                { texto: 'Sí, están seleccionados.', siguiente: 'resultado_revision_audio' },
                { texto: 'No, está seleccionado otro dispositivo.', siguiente: 'resultado_salida' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_salida' }
            ]
        },

        auriculares_4: {
            titulo: '¿Los auriculares Bluetooth aparecen conectados en el sistema?',
            opciones: [
                { texto: 'Sí, aparecen conectados.', siguiente: 'auriculares_5' },
                { texto: 'No, no consigo conectarlos.', siguiente: 'resultado_bluetooth' },
                { texto: 'Mi computadora no tiene Bluetooth.', siguiente: 'resultado_bluetooth' }
            ]
        },

        auriculares_5: {
            titulo: '¿Los auriculares Bluetooth están seleccionados como dispositivo de salida?',
            opciones: [
                { texto: 'Sí, están seleccionados.', siguiente: 'resultado_revision_audio' },
                { texto: 'No, está seleccionado otro dispositivo.', siguiente: 'resultado_salida' },
                { texto: 'La conexión se interrumpe constantemente.', siguiente: 'resultado_bluetooth' }
            ]
        },

        // MICRÓFONO

        microfono_1: {
            titulo: '¿El micrófono deja de funcionar en todas las aplicaciones?',
            opciones: [
                { texto: 'Sí, ninguna aplicación recibe sonido.', siguiente: 'microfono_2' },
                { texto: 'No, solamente falla en una aplicación.', siguiente: 'resultado_permisos' },
                { texto: 'No estoy seguro.', siguiente: 'microfono_2' }
            ]
        },

        microfono_2: {
            titulo: '¿Qué tipo de micrófono utilizas?',
            opciones: [
                { texto: 'Micrófono integrado de la laptop.', siguiente: { laptop: 'microfono_3', desktop: 'microfono_4' } },
                { texto: 'Micrófono externo o de auriculares.', siguiente: 'microfono_4' }
            ]
        },

        microfono_3: {
            titulo: '¿El micrófono integrado aparece habilitado como dispositivo de entrada?',
            opciones: [
                { texto: 'Sí, aparece habilitado.', siguiente: 'microfono_5' },
                { texto: 'No, está deshabilitado.', siguiente: 'resultado_entrada' },
                { texto: 'No aparece en la lista.', siguiente: 'resultado_controlador' }
            ]
        },

        microfono_4: {
            titulo: '¿El micrófono está correctamente conectado y aparece entre los dispositivos de entrada?',
            opciones: [
                { texto: 'Sí, aparece correctamente.', siguiente: 'microfono_5' },
                { texto: 'No aparece en el sistema.', siguiente: 'resultado_conexion_microfono' },
                { texto: 'No he comprobado las conexiones.', siguiente: 'resultado_conexion_microfono' }
            ]
        },

        microfono_5: {
            titulo: '¿El indicador de entrada de audio responde cuando hablas?',
            opciones: [
                { texto: 'Sí, detecta mi voz.', siguiente: 'resultado_permisos' },
                { texto: 'No, no detecta ningún sonido.', siguiente: 'resultado_entrada' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_entrada' }
            ]
        },

        // VOLUMEN BAJO

        volumen_1: {
            titulo: '¿El volumen está bajo incluso cuando aumentas el nivel desde el sistema?',
            opciones: [
                { texto: 'Sí, continúa demasiado bajo.', siguiente: 'volumen_2' },
                { texto: 'No, el sonido mejora al aumentarlo.', siguiente: 'resultado_resuelto' },
                { texto: 'No sé cómo ajustar el volumen.', siguiente: 'resultado_volumen' }
            ]
        },

        volumen_2: {
            titulo: '¿El volumen bajo ocurre en todas las aplicaciones?',
            opciones: [
                { texto: 'Sí, ocurre en todas.', siguiente: 'volumen_3' },
                { texto: 'No, solamente en una aplicación.', siguiente: 'resultado_aplicacion' }
            ]
        },

        volumen_3: {
            titulo: '¿El problema también ocurre al utilizar otros altavoces o auriculares?',
            opciones: [
                { texto: 'Sí, también ocurre con otros dispositivos.', siguiente: 'resultado_configuracion_audio' },
                { texto: 'No, solamente con el dispositivo actual.', siguiente: 'resultado_altavoces' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_audio' }
            ]
        },

        // INTERRUPCIONES

        interrupcion_1: {
            titulo: '¿El audio se interrumpe principalmente al utilizar aplicaciones exigentes?',
            opciones: [
                { texto: 'Sí, durante juegos o programas exigentes.', siguiente: 'resultado_rendimiento_audio' },
                { texto: 'No, también ocurre durante tareas sencillas.', siguiente: 'interrupcion_2' },
                { texto: 'No estoy seguro.', siguiente: 'interrupcion_2' }
            ]
        },

        interrupcion_2: {
            titulo: '¿Cómo conectas el dispositivo que presenta las interrupciones?',
            opciones: [
                { texto: 'Por cable.', siguiente: 'interrupcion_3' },
                { texto: 'Por Bluetooth.', siguiente: 'resultado_bluetooth' },
                { texto: 'Utilizo los altavoces integrados.', siguiente: { laptop: 'resultado_controlador', desktop: 'resultado_revision_audio' } }
            ]
        },

        interrupcion_3: {
            titulo: '¿El audio se interrumpe cuando mueves el cable o conector?',
            opciones: [
                { texto: 'Sí, al moverlo se interrumpe.', siguiente: 'resultado_conexion_audio' },
                { texto: 'No, ocurre sin moverlo.', siguiente: 'resultado_controlador' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_audio' }
            ]
        }
    },

    resultados: {
        resultado_aplicacion: {
            titulo: 'Posible problema de configuración de la aplicación',
            descripcion: 'El problema podría estar relacionado con el volumen, los permisos o la configuración de audio de una aplicación específica.',
            recomendaciones: [
                'Comprueba el volumen y la configuración de audio dentro de la aplicación.',
                'Verifica que esté utilizando el dispositivo de entrada o salida correcto.',
                'Reinicia la aplicación y comprueba si el problema continúa.',
                'Busca actualizaciones oficiales de la aplicación.'
            ]
        },

        resultado_volumen: {
            titulo: 'Revisar el volumen del sistema',
            descripcion: 'La ausencia de sonido o el volumen bajo podrían estar relacionados con la configuración de audio.',
            recomendaciones: [
                'Comprueba que el sonido no esté silenciado.',
                'Aumenta gradualmente el volumen desde el sistema.',
                'Revisa el mezclador de volumen de las aplicaciones.',
                'Comprueba también el control de volumen del dispositivo externo.'
            ]
        },

        resultado_salida: {
            titulo: 'Posible selección incorrecta del dispositivo de salida',
            descripcion: 'El sistema podría estar enviando el sonido a un dispositivo diferente del que deseas utilizar.',
            recomendaciones: [
                'Abre la configuración de sonido del sistema.',
                'Selecciona el dispositivo de salida correcto.',
                'Comprueba que el dispositivo esté conectado y habilitado.',
                'Realiza una prueba de reproducción de audio.'
            ]
        },

        resultado_controlador: {
            titulo: 'Posible problema de controlador o sistema de audio',
            descripcion: 'El problema podría relacionarse con el controlador de audio, la configuración del sistema o el hardware.',
            recomendaciones: [
                'Reinicia la computadora y comprueba si el problema continúa.',
                'Verifica que los dispositivos de audio aparezcan en el sistema.',
                'Comprueba si existen actualizaciones oficiales del controlador.',
                'Utiliza las herramientas de diagnóstico de sonido del sistema.',
                'Solicita una revisión técnica si el problema persiste.'
            ]
        },

        resultado_altavoces: {
            titulo: 'Posible problema de altavoces o auriculares',
            descripcion: 'Los síntomas podrían estar relacionados con el dispositivo utilizado para reproducir sonido.',
            recomendaciones: [
                'Comprueba que el dispositivo esté correctamente conectado.',
                'Verifica que su volumen esté configurado adecuadamente.',
                'Prueba el dispositivo en otro equipo compatible, si es posible.',
                'Evita utilizar altavoces o cables con daños visibles.',
                'Considera una revisión técnica si el problema continúa.'
            ]
        },

        resultado_conexion_audio: {
            titulo: 'Posible problema de conexión de audio',
            descripcion: 'La conexión del dispositivo podría estar afectada por el cable, el puerto o el conector.',
            recomendaciones: [
                'Comprueba que el cable esté conectado correctamente.',
                'Inspecciona visualmente el conector y el puerto.',
                'Prueba otro puerto compatible si está disponible.',
                'Evita forzar conectores o utilizar cables dañados.',
                'Solicita una revisión técnica si el puerto presenta daños.'
            ]
        },

        resultado_distorsion_volumen: {
            titulo: 'Posible distorsión por volumen elevado',
            descripcion: 'Los altavoces o auriculares podrían distorsionar el sonido cuando se utilizan a niveles elevados.',
            recomendaciones: [
                'Reduce gradualmente el volumen.',
                'Comprueba si la distorsión desaparece a niveles moderados.',
                'Revisa las mejoras y efectos de audio del sistema.',
                'Evita mantener volúmenes excesivos que puedan afectar el dispositivo o la audición.'
            ]
        },

        resultado_bluetooth: {
            titulo: 'Posible problema de conexión Bluetooth',
            descripcion: 'El audio podría verse afectado por la conexión inalámbrica, interferencias o incompatibilidad entre dispositivos.',
            recomendaciones: [
                'Comprueba que Bluetooth esté activado en la computadora.',
                'Verifica que los auriculares tengan suficiente batería.',
                'Acerca los auriculares a la computadora.',
                'Desconecta y vuelve a conectar el dispositivo.',
                'Comprueba si el equipo dispone de un adaptador Bluetooth compatible.'
            ]
        },

        resultado_permisos: {
            titulo: 'Posible problema de permisos o configuración del micrófono',
            descripcion: 'La aplicación podría no tener permiso para utilizar el micrófono o estar utilizando una entrada incorrecta.',
            recomendaciones: [
                'Comprueba los permisos de acceso al micrófono en el sistema.',
                'Verifica los permisos de la aplicación afectada.',
                'Selecciona el micrófono correcto dentro de la aplicación.',
                'Realiza una prueba de grabación para comprobar su funcionamiento.'
            ]
        },

        resultado_entrada: {
            titulo: 'Posible problema de configuración del micrófono',
            descripcion: 'El micrófono podría estar deshabilitado, silenciado o configurado con un nivel de entrada insuficiente.',
            recomendaciones: [
                'Abre la configuración de sonido del sistema.',
                'Selecciona el micrófono correcto como dispositivo de entrada.',
                'Comprueba que no esté silenciado o deshabilitado.',
                'Revisa el nivel de entrada y realiza una prueba.',
                'Solicita asistencia técnica si continúa sin detectar sonido.'
            ]
        },

        resultado_conexion_microfono: {
            titulo: 'Posible problema de conexión del micrófono',
            descripcion: 'El micrófono podría no estar siendo reconocido por un problema de conexión, compatibilidad o configuración.',
            recomendaciones: [
                'Comprueba que el micrófono esté conectado correctamente.',
                'Verifica que el puerto sea compatible con el dispositivo.',
                'Si utilizas USB, prueba otro puerto compatible.',
                'Comprueba si el dispositivo aparece en la configuración de sonido.',
                'Solicita una revisión técnica si el problema persiste.'
            ]
        },

        resultado_configuracion_audio: {
            titulo: 'Posible configuración de audio incorrecta',
            descripcion: 'El volumen bajo podría relacionarse con la configuración del sistema, el mezclador o las mejoras de audio.',
            recomendaciones: [
                'Comprueba el volumen principal y el mezclador de aplicaciones.',
                'Revisa el nivel del dispositivo de salida seleccionado.',
                'Comprueba si existen efectos o mejoras de audio activados.',
                'Realiza pruebas con diferentes aplicaciones.'
            ]
        },

        resultado_rendimiento_audio: {
            titulo: 'Posibles interrupciones por consumo de recursos',
            descripcion: 'Las aplicaciones exigentes podrían provocar interrupciones de audio cuando el equipo presenta una carga elevada.',
            recomendaciones: [
                'Comprueba el consumo de CPU y memoria desde el Administrador de tareas.',
                'Cierra las aplicaciones innecesarias.',
                'Revisa si existen actualizaciones oficiales de los controladores.',
                'Observa si el problema desaparece al reducir la carga del sistema.',
                'Utiliza la categoría Rendimiento y lentitud si también experimentas congelamientos.'
            ]
        },

        resultado_revision_audio: {
            titulo: 'Se necesita una revisión adicional del audio',
            descripcion: 'Las respuestas todavía no permiten identificar una causa predominante. El problema podría relacionarse con configuración, software, conexiones o hardware.',
            recomendaciones: [
                'Comprueba que el dispositivo correcto esté seleccionado.',
                'Prueba el sonido en diferentes aplicaciones.',
                'Revisa las conexiones externas cuando corresponda.',
                'Comprueba si existen actualizaciones oficiales del sistema.',
                'Solicita asistencia técnica si el problema continúa.'
            ]
        },

        resultado_resuelto: {
            titulo: 'El volumen parece funcionar correctamente',
            descripcion: 'Según las respuestas proporcionadas, el problema de volumen parece haberse solucionado.',
            recomendaciones: [
                'Comprueba que el sonido se mantenga estable.',
                'Conserva la configuración que funciona correctamente.',
                'Observa si el inconveniente vuelve a presentarse.'
            ]
        }
    }
};

export default audio;