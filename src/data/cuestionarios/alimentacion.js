
const alimentacion = {
    inicio: 'alimentacion_1',

    preguntas: {
        alimentacion_1: {
            titulo: '¿Qué problema de alimentación presenta tu equipo?',
            opciones: [
                {
                    texto: 'Tengo problemas con la batería o la duración de la carga.',
                    siguiente: {
                        laptop: 'bateria_1',
                        desktop: 'desktop_energia_1'
                    }
                },
                {
                    texto: 'El equipo no recibe energía correctamente.',
                    siguiente: {
                        laptop: 'cargador_1',
                        desktop: 'desktop_energia_1'
                    }
                },
                {
                    texto: 'La alimentación eléctrica se interrumpe.',
                    siguiente: {
                        laptop: 'interrupcion_laptop_1',
                        desktop: 'interrupcion_desktop_1'
                    }
                },
                {
                    texto: 'El equipo se apaga cuando desconecto la corriente.',
                    siguiente: {
                        laptop: 'bateria_4',
                        desktop: 'desktop_desconexion_1'
                    }
                }
            ]
        },

        // BATERÍA: LAPTOP

        bateria_1: {
            titulo: '¿Qué ocurre con la batería de tu laptop?',
            opciones: [
                { texto: 'Se descarga demasiado rápido.', siguiente: 'bateria_2' },
                { texto: 'No carga aunque conecte el cargador.', siguiente: 'bateria_3' },
                { texto: 'El porcentaje de batería cambia de forma irregular.', siguiente: 'bateria_5' },
                { texto: 'Solo funciona cuando está conectada.', siguiente: 'bateria_4' }
            ]
        },

        bateria_2: {
            titulo: '¿La batería se descarga rápidamente incluso cuando utilizas aplicaciones sencillas?',
            opciones: [
                { texto: 'Sí, incluso con tareas básicas.', siguiente: 'resultado_bateria' },
                { texto: 'No, principalmente cuando utilizo programas exigentes.', siguiente: 'resultado_consumo' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_bateria' }
            ]
        },

        bateria_3: {
            titulo: '¿La laptop reconoce que el cargador está conectado?',
            opciones: [
                { texto: 'Sí, pero el porcentaje no aumenta.', siguiente: 'bateria_6' },
                { texto: 'No, parece que el cargador no está conectado.', siguiente: 'cargador_1' },
                { texto: 'La carga aparece y desaparece.', siguiente: 'cargador_2' }
            ]
        },

        bateria_4: {
            titulo: '¿La laptop se apaga inmediatamente cuando desconectas el cargador?',
            opciones: [
                { texto: 'Sí, se apaga inmediatamente.', siguiente: 'resultado_bateria' },
                { texto: 'No, funciona unos minutos y luego se apaga.', siguiente: 'resultado_bateria' },
                { texto: 'No, funciona normalmente sin el cargador.', siguiente: 'resultado_resuelto' }
            ]
        },

        bateria_5: {
            titulo: '¿El porcentaje de batería cambia bruscamente o provoca apagados inesperados?',
            opciones: [
                { texto: 'Sí, cambia bruscamente o se apaga.', siguiente: 'resultado_bateria' },
                { texto: 'No, solamente parece mostrar valores incorrectos.', siguiente: 'resultado_revision_bateria' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_bateria' }
            ]
        },

        bateria_6: {
            titulo: '¿La batería permanece sin cargar incluso después de comprobar la conexión y utilizar un cargador compatible?',
            opciones: [
                { texto: 'Sí, sigue sin cargar.', siguiente: 'resultado_carga' },
                { texto: 'No, ahora carga correctamente.', siguiente: 'resultado_resuelto' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_carga' }
            ]
        },

        // CARGADOR: LAPTOP

        cargador_1: {
            titulo: '¿El cargador muestra daños visibles o problemas en sus conexiones?',
            opciones: [
                { texto: 'Sí, tiene daños visibles.', siguiente: 'resultado_cargador' },
                { texto: 'No, parece estar en buen estado.', siguiente: 'cargador_2' },
                { texto: 'No estoy seguro.', siguiente: 'cargador_2' }
            ]
        },

        cargador_2: {
            titulo: '¿La laptop carga de manera intermitente o solamente cuando el cable está en cierta posición?',
            opciones: [
                { texto: 'Sí, la conexión es intermitente.', siguiente: 'resultado_conexion' },
                { texto: 'No, simplemente no recibe carga.', siguiente: 'cargador_3' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_carga' }
            ]
        },

        cargador_3: {
            titulo: '¿Has comprobado que la toma de corriente funcione correctamente?',
            opciones: [
                { texto: 'Sí, funciona, pero la laptop no carga.', siguiente: 'resultado_carga' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia' }
            ]
        },

        // INTERRUPCIONES: LAPTOP

        interrupcion_laptop_1: {
            titulo: '¿La alimentación se interrumpe cuando mueves el cargador o su cable?',
            opciones: [
                { texto: 'Sí, la carga se interrumpe al moverlo.', siguiente: 'resultado_conexion' },
                { texto: 'No, ocurre incluso sin moverlo.', siguiente: 'interrupcion_laptop_2' }
            ]
        },

        interrupcion_laptop_2: {
            titulo: '¿La interrupción ocurre únicamente cuando utilizas el cargador?',
            opciones: [
                { texto: 'Sí, solamente cuando está conectado.', siguiente: 'resultado_cargador' },
                { texto: 'No, también ocurre utilizando la batería.', siguiente: 'resultado_revision_bateria' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_bateria' }
            ]
        },

        // ALIMENTACIÓN: ESCRITORIO

        desktop_energia_1: {
            titulo: '¿La computadora recibe energía de manera constante?',
            opciones: [
                { texto: 'No, algunas veces no enciende.', siguiente: 'desktop_energia_2' },
                { texto: 'Enciende, pero pierde energía inesperadamente.', siguiente: 'interrupcion_desktop_1' },
                { texto: 'Sí, recibe energía, pero presenta otro problema.', siguiente: 'resultado_revision_fuente' }
            ]
        },

        desktop_energia_2: {
            titulo: '¿Has comprobado el cable de alimentación y otra toma de corriente?',
            opciones: [
                { texto: 'Sí, pero el problema continúa.', siguiente: 'resultado_revision_fuente' },
                { texto: 'No, todavía no lo he comprobado.', siguiente: 'resultado_energia' }
            ]
        },

        desktop_desconexion_1: {
            titulo: '¿Te refieres a que la computadora se apaga cuando se interrumpe la corriente eléctrica?',
            opciones: [
                { texto: 'Sí, se apaga cuando deja de recibir corriente.', siguiente: 'resultado_ups' },
                { texto: 'No, se apaga aunque continúa conectada.', siguiente: 'interrupcion_desktop_1' }
            ]
        },

        // INTERRUPCIONES: ESCRITORIO

        interrupcion_desktop_1: {
            titulo: '¿La computadora se apaga o reinicia inesperadamente mientras la utilizas?',
            opciones: [
                { texto: 'Sí, se apaga completamente.', siguiente: 'interrupcion_desktop_2' },
                { texto: 'Sí, se reinicia sin previo aviso.', siguiente: 'interrupcion_desktop_3' },
                { texto: 'No, solamente pierde energía cuando falla la corriente.', siguiente: 'resultado_ups' }
            ]
        },

        interrupcion_desktop_2: {
            titulo: '¿El apagado ocurre aunque la toma de corriente funcione normalmente?',
            opciones: [
                { texto: 'Sí, ocurre incluso con corriente estable.', siguiente: 'resultado_revision_fuente' },
                { texto: 'No, ocurre cuando falla la electricidad.', siguiente: 'resultado_ups' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_fuente' }
            ]
        },

        interrupcion_desktop_3: {
            titulo: '¿Los reinicios ocurren especialmente cuando utilizas aplicaciones exigentes?',
            opciones: [
                { texto: 'Sí, principalmente durante tareas exigentes.', siguiente: 'resultado_revision_fuente' },
                { texto: 'No, ocurren de manera aleatoria.', siguiente: 'resultado_revision_fuente' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_fuente' }
            ]
        }
    },

    resultados: {
        resultado_bateria: {
            titulo: 'Posible deterioro de la batería',
            descripcion: 'La batería podría haber perdido capacidad o presentar dificultades para suministrar energía de manera estable.',
            recomendaciones: [
                'Comprueba el estado de la batería mediante las herramientas del sistema.',
                'Observa si la duración ha disminuido progresivamente.',
                'Utiliza cargadores compatibles y en buen estado.',
                'Si la batería está hinchada, deja de utilizar el equipo y solicita asistencia técnica.',
                'Considera una revisión profesional para evaluar su reemplazo.'
            ]
        },

        resultado_consumo: {
            titulo: 'Posible consumo elevado de energía',
            descripcion: 'Las aplicaciones exigentes pueden aumentar el consumo energético y reducir la duración de la batería.',
            recomendaciones: [
                'Comprueba qué aplicaciones consumen más energía.',
                'Reduce el brillo de pantalla cuando sea posible.',
                'Utiliza los modos de ahorro de energía disponibles.',
                'Cierra las aplicaciones que no necesites.'
            ]
        },

        resultado_revision_bateria: {
            titulo: 'Se necesita revisar el estado de la batería',
            descripcion: 'Los síntomas podrían relacionarse con la batería, la administración de energía o algún componente del equipo.',
            recomendaciones: [
                'Comprueba el estado y porcentaje de carga.',
                'Revisa si el sistema muestra advertencias relacionadas con la batería.',
                'Observa si los apagados ocurren con determinados niveles de carga.',
                'Solicita una revisión técnica si el problema persiste.'
            ]
        },

        resultado_carga: {
            titulo: 'Posible problema en el sistema de carga',
            descripcion: 'La laptop podría presentar dificultades relacionadas con el cargador, la batería o el circuito de carga.',
            recomendaciones: [
                'Verifica que el cargador sea compatible con el equipo.',
                'Comprueba que la toma de corriente funcione.',
                'Evita utilizar adaptadores o cables dañados.',
                'Solicita una revisión profesional si continúa sin cargar.'
            ]
        },

        resultado_cargador: {
            titulo: 'Posible problema del cargador',
            descripcion: 'La alimentación podría verse afectada por daños o fallas en el cargador o sus conexiones.',
            recomendaciones: [
                'Inspecciona visualmente el cargador sin desmontarlo.',
                'No utilices cables con daños visibles o conexiones expuestas.',
                'Comprueba que el adaptador sea compatible con la laptop.',
                'Considera reemplazar el cargador si un técnico confirma que está defectuoso.'
            ]
        },

        resultado_conexion: {
            titulo: 'Posible problema de conexión de carga',
            descripcion: 'Las interrupciones al mover el cable podrían indicar un problema en el conector, el cable o el puerto de carga.',
            recomendaciones: [
                'Evita mover o forzar el conector mientras está conectado.',
                'Comprueba si existen daños visibles en el cable o puerto.',
                'No intentes reparar conexiones eléctricas dañadas por tu cuenta.',
                'Solicita una revisión técnica para identificar el componente afectado.'
            ]
        },

        resultado_energia: {
            titulo: 'Posible problema de alimentación externa',
            descripcion: 'El problema podría estar relacionado con la toma de corriente, el cable o una conexión eléctrica.',
            recomendaciones: [
                'Comprueba que la toma de corriente funcione.',
                'Verifica que los cables estén correctamente conectados.',
                'Evita utilizar extensiones o conexiones dañadas.',
                'Solicita asistencia técnica si el problema continúa.'
            ]
        },

        resultado_revision_fuente: {
            titulo: 'Posible problema de fuente de alimentación o hardware',
            descripcion: 'Los apagados, reinicios o dificultades de alimentación podrían relacionarse con la fuente de poder, otros componentes o condiciones eléctricas externas.',
            recomendaciones: [
                'Comprueba las conexiones externas de alimentación.',
                'Observa si los problemas ocurren al ejecutar tareas exigentes.',
                'No abras ni manipules internamente la fuente de alimentación.',
                'Solicita una revisión técnica para comprobar la causa.'
            ]
        },

        resultado_ups: {
            titulo: 'Interrupción del suministro eléctrico',
            descripcion: 'Una computadora de escritorio normalmente se apaga cuando deja de recibir corriente. Esto no significa necesariamente que exista una falla del equipo.',
            recomendaciones: [
                'Comprueba la estabilidad del suministro eléctrico.',
                'Guarda tus archivos periódicamente.',
                'Considera utilizar un sistema de alimentación ininterrumpida (UPS) compatible.',
                'Evita conexiones eléctricas deterioradas o sobrecargadas.'
            ]
        },

        resultado_resuelto: {
            titulo: 'La alimentación parece funcionar correctamente',
            descripcion: 'Según las respuestas proporcionadas, el problema de alimentación ya no se presenta.',
            recomendaciones: [
                'Comprueba que el equipo funcione normalmente.',
                'Observa si el problema vuelve a presentarse.',
                'Utiliza cargadores y conexiones compatibles.',
                'Solicita una revisión si el inconveniente reaparece.'
            ]
        }
    }
};

export default alimentacion;