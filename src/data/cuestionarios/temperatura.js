
const temperatura = {
    inicio: 'temperatura_1',

    preguntas: {
        temperatura_1: {
            titulo: '¿Qué problema de temperatura o refrigeración presenta tu computadora?',
            opciones: [
                { texto: 'La computadora se calienta demasiado.', siguiente: 'calor_1' },
                { texto: 'Los ventiladores hacen demasiado ruido.', siguiente: 'ruido_1' },
                { texto: 'El equipo se apaga o reinicia cuando se calienta.', siguiente: 'apagado_1' },
                { texto: 'Un ventilador parece no funcionar.', siguiente: 'ventilador_1' },
                { texto: 'La computadora pierde rendimiento cuando se calienta.', siguiente: 'rendimiento_1' },
                { texto: 'El equipo expulsa mucho aire caliente.', siguiente: 'aire_1' }
            ]
        },

        // SOBRECALENTAMIENTO

        calor_1: {
            titulo: '¿En qué situación notas que la computadora se calienta demasiado?',
            opciones: [
                { texto: 'Durante juegos o aplicaciones exigentes.', siguiente: 'calor_2' },
                { texto: 'Incluso cuando realizo tareas sencillas.', siguiente: 'calor_3' },
                { texto: 'Después de utilizarla durante mucho tiempo.', siguiente: 'calor_4' }
            ]
        },

        calor_2: {
            titulo: '¿La computadora también pierde rendimiento o se apaga cuando aumenta la temperatura?',
            opciones: [
                { texto: 'Sí, pierde rendimiento.', siguiente: 'resultado_limitacion_termica' },
                { texto: 'Sí, llega a apagarse o reiniciarse.', siguiente: 'resultado_apagado_termico' },
                { texto: 'No, solamente noto que se calienta.', siguiente: 'resultado_carga_termica' }
            ]
        },

        calor_3: {
            titulo: '¿Los ventiladores funcionan constantemente a gran velocidad incluso cuando el equipo está en reposo?',
            opciones: [
                { texto: 'Sí, funcionan a gran velocidad.', siguiente: 'calor_5' },
                { texto: 'No, funcionan normalmente.', siguiente: 'resultado_revision_termica' },
                { texto: 'No escucho los ventiladores.', siguiente: 'ventilador_1' }
            ]
        },

        calor_4: {
            titulo: '¿El equipo tiene suficiente espacio para permitir la circulación del aire?',
            opciones: [
                { texto: 'Sí, está en una superficie despejada.', siguiente: 'resultado_mantenimiento' },
                { texto: 'No, algunas entradas o salidas de aire están obstruidas.', siguiente: 'resultado_ventilacion' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_ventilacion' }
            ]
        },

        calor_5: {
            titulo: '¿Has comprobado si existen aplicaciones que consumen muchos recursos en segundo plano?',
            opciones: [
                { texto: 'Sí, hay procesos utilizando muchos recursos.', siguiente: 'resultado_consumo_recursos' },
                { texto: 'No, el consumo de recursos parece normal.', siguiente: 'resultado_mantenimiento' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_consumo_recursos' }
            ]
        },

        // VENTILADORES RUIDOSOS

        ruido_1: {
            titulo: '¿Cómo describirías el ruido de los ventiladores?',
            opciones: [
                { texto: 'Es un sonido fuerte de aire en movimiento.', siguiente: 'ruido_2' },
                { texto: 'Se escuchan golpes, vibraciones o rozamientos.', siguiente: 'resultado_ventilador_mecanico' },
                { texto: 'El ruido aparece y desaparece constantemente.', siguiente: 'ruido_3' }
            ]
        },

        ruido_2: {
            titulo: '¿El ruido aumenta principalmente cuando utilizas programas exigentes?',
            opciones: [
                { texto: 'Sí, principalmente durante tareas exigentes.', siguiente: 'resultado_carga_termica' },
                { texto: 'No, también es muy fuerte cuando no hago nada.', siguiente: 'ruido_3' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_termica' }
            ]
        },

        ruido_3: {
            titulo: '¿La computadora presenta temperaturas elevadas al mismo tiempo que aumenta el ruido?',
            opciones: [
                { texto: 'Sí, se calienta considerablemente.', siguiente: 'resultado_mantenimiento' },
                { texto: 'No, la temperatura parece normal.', siguiente: 'resultado_revision_ventilador' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_ventilador' }
            ]
        },

        // APAGADOS POR TEMPERATURA

        apagado_1: {
            titulo: '¿Los apagados o reinicios ocurren principalmente durante tareas exigentes?',
            opciones: [
                { texto: 'Sí, durante juegos o programas exigentes.', siguiente: 'apagado_2' },
                { texto: 'No, también ocurren durante tareas sencillas.', siguiente: 'apagado_3' },
                { texto: 'Ocurren de manera aparentemente aleatoria.', siguiente: 'apagado_3' }
            ]
        },

        apagado_2: {
            titulo: '¿El equipo presenta calor excesivo o ventiladores muy acelerados antes de apagarse?',
            opciones: [
                { texto: 'Sí, presenta esos síntomas.', siguiente: 'resultado_apagado_termico' },
                { texto: 'No, se apaga sin síntomas de calentamiento.', siguiente: 'resultado_revision_apagado' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_apagado' }
            ]
        },

        apagado_3: {
            titulo: '¿El equipo se siente excesivamente caliente antes de apagarse?',
            opciones: [
                { texto: 'Sí, se siente demasiado caliente.', siguiente: 'resultado_apagado_termico' },
                { texto: 'No, su temperatura parece normal.', siguiente: 'resultado_revision_apagado' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_apagado' }
            ]
        },

        // VENTILADOR SIN FUNCIONAR

        ventilador_1: {
            titulo: '¿Cómo identificaste que un ventilador podría no estar funcionando?',
            opciones: [
                { texto: 'Puedo observar que no gira.', siguiente: 'ventilador_2' },
                { texto: 'No escucho ningún ventilador funcionando.', siguiente: 'ventilador_3' },
                { texto: 'El sistema muestra una advertencia sobre el ventilador.', siguiente: 'resultado_falla_ventilador' }
            ]
        },

        ventilador_2: {
            titulo: '¿El equipo presenta temperaturas elevadas mientras el ventilador permanece detenido?',
            opciones: [
                { texto: 'Sí, se calienta demasiado.', siguiente: 'resultado_falla_ventilador' },
                { texto: 'No, su temperatura parece normal.', siguiente: 'resultado_revision_ventilador' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_ventilador' }
            ]
        },

        ventilador_3: {
            titulo: '¿La computadora presenta sobrecalentamiento o advertencias de temperatura?',
            opciones: [
                { texto: 'Sí, presenta esos síntomas.', siguiente: 'resultado_falla_ventilador' },
                { texto: 'No, funciona con temperaturas aparentemente normales.', siguiente: 'resultado_ventilador_normal' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_ventilador' }
            ]
        },

        // PÉRDIDA DE RENDIMIENTO

        rendimiento_1: {
            titulo: '¿La computadora funciona normalmente al encenderla, pero se vuelve lenta después de calentarse?',
            opciones: [
                { texto: 'Sí, el rendimiento disminuye con el tiempo.', siguiente: 'rendimiento_2' },
                { texto: 'No, siempre funciona lentamente.', siguiente: 'resultado_revision_termica' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision_termica' }
            ]
        },

        rendimiento_2: {
            titulo: '¿El equipo mejora después de apagarlo y dejar que se enfríe?',
            opciones: [
                { texto: 'Sí, mejora temporalmente.', siguiente: 'resultado_limitacion_termica' },
                { texto: 'No, continúa funcionando lentamente.', siguiente: 'resultado_revision_termica' },
                { texto: 'No he podido comprobarlo.', siguiente: 'resultado_revision_termica' }
            ]
        },

        // AIRE CALIENTE

        aire_1: {
            titulo: '¿El aire caliente aparece principalmente cuando ejecutas aplicaciones exigentes?',
            opciones: [
                { texto: 'Sí, principalmente durante tareas exigentes.', siguiente: 'aire_2' },
                { texto: 'No, incluso cuando el equipo está en reposo.', siguiente: 'aire_3' },
                { texto: 'No estoy seguro.', siguiente: 'aire_3' }
            ]
        },

        aire_2: {
            titulo: '¿El equipo presenta apagados, advertencias de temperatura o pérdida importante de rendimiento?',
            opciones: [
                { texto: 'Sí, presenta alguno de esos síntomas.', siguiente: 'resultado_revision_termica' },
                { texto: 'No, funciona normalmente.', siguiente: 'resultado_carga_termica' }
            ]
        },

        aire_3: {
            titulo: '¿El equipo tiene las entradas y salidas de ventilación despejadas?',
            opciones: [
                { texto: 'Sí, están despejadas.', siguiente: 'resultado_consumo_recursos' },
                { texto: 'No, algunas están obstruidas.', siguiente: 'resultado_ventilacion' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_ventilacion' }
            ]
        }
    },

    resultados: {
        resultado_limitacion_termica: {
            titulo: 'Posible reducción del rendimiento por temperatura',
            descripcion: 'El procesador o la tarjeta gráfica podrían estar reduciendo su velocidad para limitar el calentamiento. Este comportamiento se conoce como limitación térmica o thermal throttling.',
            recomendaciones: [
                'Comprueba que las entradas y salidas de aire estén despejadas.',
                'Observa si la lentitud coincide con temperaturas elevadas.',
                'Reduce temporalmente las tareas exigentes.',
                'Utiliza el equipo en una superficie firme y ventilada.',
                'Solicita una revisión técnica si el problema ocurre frecuentemente.'
            ]
        },

        resultado_apagado_termico: {
            titulo: 'Posible apagado por protección térmica',
            descripcion: 'El equipo podría estar apagándose para proteger sus componentes ante temperaturas elevadas. También pueden existir otras causas, como problemas eléctricos.',
            recomendaciones: [
                'Suspende las tareas exigentes y permite que el equipo se enfríe.',
                'Apaga el equipo si presenta calor excesivo o advertencias de temperatura.',
                'Comprueba que las salidas de ventilación no estén obstruidas.',
                'No intentes forzar el funcionamiento mientras continúa sobrecalentándose.',
                'Solicita una revisión técnica antes de volver a someterlo a cargas elevadas.'
            ]
        },

        resultado_carga_termica: {
            titulo: 'Posible aumento normal de temperatura por carga de trabajo',
            descripcion: 'Los componentes pueden generar más calor y aumentar la velocidad de sus ventiladores durante tareas exigentes. Esto no implica necesariamente una falla.',
            recomendaciones: [
                'Comprueba que el equipo mantenga un funcionamiento estable.',
                'Utiliza una superficie que permita una ventilación adecuada.',
                'Evita obstruir las entradas y salidas de aire.',
                'Observa si aparecen apagados, advertencias o pérdida de rendimiento.',
                'Solicita asistencia técnica si se presentan síntomas adicionales.'
            ]
        },

        resultado_revision_termica: {
            titulo: 'Se necesita una revisión adicional de temperatura',
            descripcion: 'Las respuestas todavía no permiten determinar si existe un problema de refrigeración. La temperatura podría relacionarse con la carga de trabajo, ventilación o hardware.',
            recomendaciones: [
                'Observa cuándo aparecen los síntomas.',
                'Comprueba el consumo de CPU y memoria.',
                'Revisa que las entradas y salidas de aire estén despejadas.',
                'Utiliza herramientas confiables para consultar temperaturas, si sabes hacerlo.',
                'Solicita una revisión técnica si el problema continúa.'
            ]
        },

        resultado_mantenimiento: {
            titulo: 'Posible necesidad de mantenimiento del sistema de refrigeración',
            descripcion: 'La acumulación de polvo, la ventilación insuficiente o el desgaste de componentes de refrigeración podrían afectar la temperatura.',
            recomendaciones: [
                'Comprueba visualmente que las rejillas de ventilación estén despejadas.',
                'Mantén limpio el entorno donde utilizas la computadora.',
                'Evita introducir objetos en las rejillas o utilizar líquidos para limpiarlas.',
                'Solicita mantenimiento profesional si existe acumulación importante de polvo.',
                'Consulta a un técnico antes de reemplazar ventiladores o pasta térmica.'
            ]
        },

        resultado_ventilacion: {
            titulo: 'Posible ventilación insuficiente',
            descripcion: 'Las entradas o salidas de aire obstruidas pueden dificultar la disipación del calor generado por los componentes.',
            recomendaciones: [
                'Coloca la computadora sobre una superficie firme y estable.',
                'Evita utilizar laptops sobre camas, almohadas o superficies blandas.',
                'Deja espacio libre alrededor de las rejillas de ventilación.',
                'No coloques objetos que bloqueen la salida de aire caliente.',
                'Comprueba si la temperatura mejora después de despejar la ventilación.'
            ]
        },

        resultado_consumo_recursos: {
            titulo: 'Posible consumo elevado de recursos',
            descripcion: 'Los procesos que utilizan intensamente el procesador o la tarjeta gráfica pueden incrementar la generación de calor, incluso sin aplicaciones visibles.',
            recomendaciones: [
                'Abre el Administrador de tareas si utilizas Windows.',
                'Comprueba qué procesos utilizan CPU o GPU.',
                'Cierra las aplicaciones innecesarias que reconozcas.',
                'Revisa si existen actualizaciones o tareas del sistema en segundo plano.',
                'Solicita asistencia si detectas consumo elevado sin una causa identificable.'
            ]
        },

        resultado_ventilador_mecanico: {
            titulo: 'Posible problema mecánico del ventilador',
            descripcion: 'Los golpes, vibraciones o rozamientos podrían indicar desgaste, obstrucciones o dificultades mecánicas en un ventilador.',
            recomendaciones: [
                'Evita continuar utilizando el equipo si el ventilador produce ruidos mecánicos intensos.',
                'Apaga el equipo si presenta vibraciones fuertes o sobrecalentamiento.',
                'No introduzcas objetos en las rejillas para intentar detener o limpiar el ventilador.',
                'Solicita una revisión técnica para comprobar su estado.',
                'Considera su reemplazo únicamente después de identificar la falla.'
            ]
        },

        resultado_revision_ventilador: {
            titulo: 'Se necesita comprobar el funcionamiento del ventilador',
            descripcion: 'El ruido o la ausencia de movimiento podrían ser normales en determinadas condiciones o indicar una dificultad del sistema de refrigeración.',
            recomendaciones: [
                'Observa si el ventilador cambia de velocidad cuando aumenta la carga.',
                'Comprueba si aparecen advertencias relacionadas con la refrigeración.',
                'Evita manipular ventiladores mientras el equipo está encendido.',
                'Solicita una revisión técnica si existen dudas sobre su funcionamiento.'
            ]
        },

        resultado_falla_ventilador: {
            titulo: 'Posible falla del ventilador de refrigeración',
            descripcion: 'La falta de funcionamiento acompañada de temperaturas elevadas o advertencias podría indicar una falla en el sistema de refrigeración.',
            recomendaciones: [
                'Apaga el equipo y evita utilizarlo mientras exista riesgo de sobrecalentamiento.',
                'No intentes hacer girar el ventilador manualmente mientras está conectado.',
                'No desmontes componentes eléctricos si no tienes conocimientos técnicos.',
                'Solicita una revisión profesional para comprobar el ventilador y sus conexiones.',
                'Evita ejecutar aplicaciones exigentes hasta solucionar el problema.'
            ]
        },

        resultado_revision_apagado: {
            titulo: 'Posible problema térmico o de alimentación',
            descripcion: 'Los apagados inesperados pueden relacionarse con temperatura, suministro eléctrico, controladores u otros componentes. Las respuestas no permiten confirmar una causa específica.',
            recomendaciones: [
                'Observa si el equipo se calienta antes de apagarse.',
                'Comprueba las conexiones externas de alimentación.',
                'Evita tareas exigentes si los apagados son frecuentes.',
                'Utiliza la categoría Batería y alimentación para investigar problemas eléctricos.',
                'Solicita una revisión técnica si los apagados continúan.'
            ]
        },

        resultado_ventilador_normal: {
            titulo: 'Posible funcionamiento normal del control de ventilación',
            descripcion: 'Algunas computadoras reducen o detienen temporalmente sus ventiladores cuando la temperatura es baja. La ausencia de ruido no confirma una falla.',
            recomendaciones: [
                'Comprueba si el equipo funciona sin sobrecalentamiento.',
                'Observa si los ventiladores se activan cuando aumenta la carga.',
                'No intentes forzar el giro de los ventiladores.',
                'Consulta las especificaciones del fabricante si tienes dudas.',
                'Solicita una revisión si aparecen advertencias o temperaturas elevadas.'
            ]
        }
    }
};

export default temperatura;