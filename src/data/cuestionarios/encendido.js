const encendido = {
        inicio: 'encendido_1',

        preguntas: {
            encendido_1: {
                titulo: '¿Qué ocurre cuando intentas encender tu computadora?',
                opciones: [
                    {
                        texto: 'No sucede absolutamente nada.',
                        siguiente: {
                            desktop: 'encendido_desktop_1',
                            laptop: 'encendido_laptop_1'
                        }
                    },
                    {
                        texto: 'Enciende, pero no aparece imagen.',
                        siguiente: {
                            desktop: 'imagen_desktop_1',
                            laptop: 'imagen_laptop_1'
                        }
                    },
                    {
                        texto: 'Enciende y se apaga inmediatamente.',
                        siguiente: {
                            desktop: 'apagado_desktop_1',
                            laptop: 'apagado_laptop_1'
                        }
                    },
                    { texto: 'Enciende, pero no inicia el sistema operativo.', siguiente: 'sistema_1' }
                ]
            },

            // ALIMENTACIÓN ELÉCTRICA: ESCRITORIO

            encendido_desktop_1: {
                titulo: '¿La computadora está conectada correctamente a una toma de corriente?',
                opciones: [
                    { texto: 'Sí, está conectada correctamente.', siguiente: 'encendido_desktop_2' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_energia' },
                    { texto: 'No, actualmente no está conectada.', siguiente: 'resultado_energia' }
                ]
            },

            encendido_desktop_2: {
                titulo: '¿Has comprobado el cable de alimentación y probado otra toma de corriente?',
                opciones: [
                    { texto: 'Sí, pero la computadora sigue sin encender.', siguiente: 'resultado_hardware' },
                    { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia' }
                ]
            },

            // ALIMENTACIÓN ELÉCTRICA: LAPTOP

            encendido_laptop_1: {
                titulo: '¿La laptop muestra algún indicador de carga al conectar el cargador?',
                opciones: [
                    { texto: 'Sí, aparece un indicador de carga.', siguiente: 'encendido_laptop_2' },
                    { texto: 'No aparece ningún indicador.', siguiente: 'encendido_laptop_3' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_energia' }
                ]
            },

            encendido_laptop_2: {
                titulo: '¿La laptop sigue sin encender aunque esté conectada al cargador?',
                opciones: [
                    { texto: 'Sí, sigue sin encender.', siguiente: 'resultado_hardware' },
                    { texto: 'No, ahora enciende correctamente.', siguiente: 'resultado_resuelto' }
                ]
            },

            encendido_laptop_3: {
                titulo: '¿Has comprobado que el cargador esté bien conectado y que la toma funcione?',
                opciones: [
                    { texto: 'Sí, pero sigue sin mostrar señales de carga.', siguiente: 'resultado_energia' },
                    { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia' }
                ]
            },

            // PROBLEMAS DE IMAGEN: ESCRITORIO

            imagen_desktop_1: {
                titulo: '¿El monitor está encendido y muestra algún indicador de funcionamiento?',
                opciones: [
                    { texto: 'Sí, el monitor está encendido.', siguiente: 'imagen_desktop_2' },
                    { texto: 'No, el monitor parece estar apagado.', siguiente: 'resultado_monitor' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_monitor' }
                ]
            },

            imagen_desktop_2: {
                titulo: '¿Has comprobado el cable de video y la entrada seleccionada en el monitor?',
                opciones: [
                    { texto: 'Sí, pero continúa sin aparecer imagen.', siguiente: 'imagen_desktop_3' },
                    { texto: 'No, todavía no los he comprobado.', siguiente: 'resultado_monitor' }
                ]
            },

            imagen_desktop_3: {
                titulo: '¿La computadora muestra imagen al conectarla a otro monitor compatible?',
                opciones: [
                    { texto: 'Sí, aparece imagen en otro monitor.', siguiente: 'resultado_monitor' },
                    { texto: 'No, tampoco aparece imagen.', siguiente: 'resultado_video' },
                    { texto: 'No tengo otro monitor disponible.', siguiente: 'resultado_pantalla' }
                ]
            },

            // PROBLEMAS DE IMAGEN: LAPTOP

            imagen_laptop_1: {
                titulo: '¿La laptop muestra señales de funcionamiento aunque la pantalla permanezca negra?',
                opciones: [
                    { texto: 'Sí, muestra luces o sonidos de funcionamiento.', siguiente: 'imagen_laptop_2' },
                    { texto: 'No, no muestra señales de funcionamiento.', siguiente: 'resultado_hardware' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_pantalla' }
                ]
            },

            imagen_laptop_2: {
                titulo: '¿Has comprobado el brillo de la pantalla?',
                opciones: [
                    { texto: 'Sí, pero continúa sin mostrar imagen.', siguiente: 'imagen_laptop_3' },
                    { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_pantalla' }
                ]
            },

            imagen_laptop_3: {
                titulo: '¿La laptop muestra imagen cuando conectas un monitor externo compatible?',
                opciones: [
                    { texto: 'Sí, aparece imagen en el monitor externo.', siguiente: 'resultado_pantalla_laptop' },
                    { texto: 'No, tampoco aparece imagen.', siguiente: 'resultado_video' },
                    { texto: 'No tengo un monitor externo disponible.', siguiente: 'resultado_pantalla' }
                ]
            },

            // APAGADOS INESPERADOS: ESCRITORIO

            apagado_desktop_1: {
                titulo: '¿La computadora se apaga pocos segundos después de encender?',
                opciones: [
                    { texto: 'Sí, se apaga casi inmediatamente.', siguiente: 'apagado_desktop_2' },
                    { texto: 'No, funciona durante un tiempo antes de apagarse.', siguiente: 'apagado_desktop_3' }
                ]
            },

            apagado_desktop_2: {
                titulo: '¿Has comprobado que el cable de alimentación esté firme y que la toma funcione?',
                opciones: [
                    { texto: 'Sí, pero continúa apagándose.', siguiente: 'resultado_apagado' },
                    { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia' }
                ]
            },

            apagado_desktop_3: {
                titulo: '¿Notas temperaturas elevadas o ventilación obstruida antes del apagado?',
                opciones: [
                    { texto: 'Sí, el equipo parece calentarse demasiado.', siguiente: 'resultado_temperatura' },
                    { texto: 'No, no he observado temperaturas elevadas.', siguiente: 'resultado_apagado' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_apagado' }
                ]
            },

            // APAGADOS INESPERADOS: LAPTOP

            apagado_laptop_1: {
                titulo: '¿La laptop se apaga incluso cuando está conectada al cargador?',
                opciones: [
                    { texto: 'Sí, también se apaga con el cargador conectado.', siguiente: 'apagado_laptop_2' },
                    { texto: 'No, solamente se apaga cuando utiliza la batería.', siguiente: 'resultado_bateria' },
                    { texto: 'No lo he comprobado.', siguiente: 'resultado_energia' }
                ]
            },

            apagado_laptop_2: {
                titulo: '¿La laptop presenta temperaturas elevadas o ventilación obstruida antes de apagarse?',
                opciones: [
                    { texto: 'Sí, se calienta demasiado.', siguiente: 'resultado_temperatura' },
                    { texto: 'No, se apaga sin calentarse notablemente.', siguiente: 'resultado_apagado' },
                    { texto: 'No estoy seguro.', siguiente: 'resultado_apagado' }
                ]
            },

            // INICIO DEL SISTEMA OPERATIVO: AMBOS EQUIPOS

            sistema_1: {
                titulo: '¿Aparece algún mensaje de error cuando intentas iniciar el sistema operativo?',
                opciones: [
                    { texto: 'Sí, aparece un mensaje de error.', siguiente: 'sistema_2' },
                    { texto: 'No, permanece en una pantalla de carga.', siguiente: 'sistema_3' },
                    { texto: 'No, aparece una pantalla negra después del logotipo.', siguiente: 'resultado_sistema' }
                ]
            },

            sistema_2: {
                titulo: '¿El mensaje indica que no se encuentra el sistema operativo o el dispositivo de arranque?',
                opciones: [
                    { texto: 'Sí, indica que no encuentra el dispositivo o sistema.', siguiente: 'resultado_almacenamiento' },
                    { texto: 'No, muestra otro tipo de error.', siguiente: 'resultado_sistema' },
                    { texto: 'No entiendo el mensaje.', siguiente: 'resultado_sistema' }
                ]
            },

            sistema_3: {
                titulo: '¿El equipo permanece detenido en la pantalla de carga durante varios minutos?',
                opciones: [
                    { texto: 'Sí, permanece detenido y no avanza.', siguiente: 'resultado_sistema' },
                    { texto: 'No, termina mostrando un mensaje de error.', siguiente: 'sistema_2' },
                    { texto: 'No, finalmente inicia correctamente.', siguiente: 'resultado_resuelto' }
                ]
            }
        },

        resultados: {
            resultado_energia: {
                titulo: 'Posible problema de alimentación eléctrica',
                descripcion: 'Los síntomas podrían estar relacionados con la conexión eléctrica, el cargador o algún componente de alimentación.',
                recomendaciones: [
                    'Comprueba que el equipo esté conectado correctamente.',
                    'Verifica que la toma de corriente funcione.',
                    'Si utilizas una laptop, revisa el cargador y sus conexiones.',
                    'No utilices cables, cargadores o conexiones con daños visibles.',
                    'Si el problema continúa, solicita una revisión técnica.'
                ]
            },

            resultado_hardware: {
                titulo: 'Posible problema de hardware',
                descripcion: 'El equipo presenta síntomas que podrían estar relacionados con componentes internos o con el sistema de alimentación.',
                recomendaciones: [
                    'Desconecta los dispositivos externos innecesarios.',
                    'Comprueba que el equipo reciba alimentación eléctrica.',
                    'Evita abrir el equipo si no tienes experiencia técnica.',
                    'Solicita una revisión profesional si continúa sin funcionar.'
                ]
            },

            resultado_monitor: {
                titulo: 'Posible problema del monitor o su conexión',
                descripcion: 'La ausencia de imagen podría estar relacionada con el monitor, su alimentación, el cable de video o la entrada seleccionada.',
                recomendaciones: [
                    'Verifica que el monitor esté encendido y conectado a la corriente.',
                    'Comprueba que el cable de video esté correctamente conectado.',
                    'Revisa que la entrada HDMI, DisplayPort u otra corresponda a la conexión utilizada.',
                    'Prueba otro cable o monitor compatible si tienes uno disponible.'
                ]
            },

            resultado_video: {
                titulo: 'Posible problema de salida de video o hardware',
                descripcion: 'La falta de imagen en diferentes pantallas podría indicar un problema de salida de video, de inicio del equipo o de componentes internos.',
                recomendaciones: [
                    'Comprueba las conexiones de video disponibles.',
                    'Desconecta los periféricos que no sean necesarios.',
                    'Evita manipular componentes internos sin conocimientos técnicos.',
                    'Solicita una revisión profesional para identificar la causa.'
                ]
            },

            resultado_pantalla_laptop: {
                titulo: 'Posible problema de la pantalla integrada',
                descripcion: 'Si la laptop muestra imagen en un monitor externo, el inconveniente podría estar relacionado con su pantalla integrada o sus conexiones.',
                recomendaciones: [
                    'Comprueba nuevamente el brillo de la pantalla.',
                    'Revisa las opciones de proyección o duplicación de pantalla.',
                    'Evita presionar o desmontar la pantalla.',
                    'Solicita una revisión técnica si la pantalla integrada continúa sin funcionar.'
                ]
            },

            resultado_pantalla: {
                titulo: 'Posible problema de pantalla o video',
                descripcion: 'Todavía no hay suficiente información para determinar si el problema está en la pantalla, la conexión de video o algún componente interno.',
                recomendaciones: [
                    'Comprueba el brillo y las conexiones disponibles.',
                    'Verifica que el equipo muestre señales de funcionamiento.',
                    'Si es posible, prueba con una pantalla externa compatible.',
                    'Solicita asistencia técnica si continúa sin aparecer imagen.'
                ]
            },

            resultado_temperatura: {
                titulo: 'Posible problema de temperatura',
                descripcion: 'Los apagados podrían estar relacionados con temperaturas elevadas o dificultades de ventilación.',
                recomendaciones: [
                    'Apaga el equipo y permite que se enfríe.',
                    'Comprueba que las entradas y salidas de ventilación no estén obstruidas.',
                    'Utiliza el equipo sobre una superficie firme que permita la circulación de aire.',
                    'Solicita una revisión si continúa apagándose o presenta temperaturas excesivas.'
                ]
            },

            resultado_apagado: {
                titulo: 'Posible problema de alimentación o hardware',
                descripcion: 'Los apagados inesperados podrían relacionarse con la alimentación eléctrica, la temperatura u otros componentes. Se necesita una revisión adicional para identificar la causa.',
                recomendaciones: [
                    'Comprueba las conexiones eléctricas externas.',
                    'Desconecta los periféricos innecesarios.',
                    'Observa si el apagado ocurre siempre en el mismo momento.',
                    'Evita seguir utilizando el equipo si presenta olor a quemado o señales de daño.',
                    'Solicita una revisión técnica si el problema persiste.'
                ]
            },

            resultado_bateria: {
                titulo: 'Posible problema de batería o alimentación',
                descripcion: 'Si la laptop se apaga cuando utiliza la batería, pero funciona conectada al cargador, podría existir un problema de batería o administración de energía.',
                recomendaciones: [
                    'Comprueba el nivel y estado de carga de la batería.',
                    'Verifica si el sistema muestra advertencias relacionadas con la batería.',
                    'Utiliza un cargador compatible y en buen estado.',
                    'No manipules una batería hinchada o dañada; solicita asistencia técnica.'
                ]
            },

            resultado_sistema: {
                titulo: 'Posible problema del sistema operativo',
                descripcion: 'El equipo parece encender, pero presenta dificultades durante el inicio del sistema operativo.',
                recomendaciones: [
                    'Anota cualquier mensaje de error que aparezca.',
                    'Desconecta dispositivos USB innecesarios.',
                    'Si el sistema dispone de herramientas de recuperación, considera utilizarlas con precaución.',
                    'Evita reinstalar el sistema sin respaldar previamente tus archivos.',
                    'Solicita una revisión si el problema persiste.'
                ]
            },

            resultado_almacenamiento: {
                titulo: 'Posible problema de arranque o almacenamiento',
                descripcion: 'El mensaje podría indicar dificultades para localizar el sistema operativo o acceder al dispositivo de almacenamiento.',
                recomendaciones: [
                    'Anota el mensaje exacto que aparece durante el inicio.',
                    'Desconecta memorias USB y unidades externas innecesarias.',
                    'Evita formatear o reinstalar el sistema sin respaldar tus archivos.',
                    'Solicita una revisión técnica para comprobar el dispositivo de almacenamiento y la configuración de arranque.'
                ]
            },

            resultado_resuelto: {
                titulo: 'El equipo parece iniciar correctamente',
                descripcion: 'Según las respuestas proporcionadas, el problema inicial ya no se presenta. No es posible determinar su causa anterior con la información disponible.',
                recomendaciones: [
                    'Comprueba que el equipo funcione con normalidad.',
                    'Observa si el problema vuelve a presentarse.',
                    'Mantén respaldos de tus archivos importantes.',
                    'Solicita una revisión si el inconveniente vuelve a ocurrir.'
                ]
            }
        }
};

export default encendido;