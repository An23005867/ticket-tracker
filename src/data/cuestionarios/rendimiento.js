
const rendimiento = {
    inicio: 'rendimiento_1',

    preguntas: {
        rendimiento_1: {
            titulo: '¿En qué situación notas que tu computadora funciona lentamente?',
            opciones: [
                { texto: 'Está lenta prácticamente todo el tiempo.', siguiente: 'general_1' },
                { texto: 'Tarda demasiado en iniciar.', siguiente: 'inicio_1' },
                { texto: 'Se congela o deja de responder.', siguiente: 'congelamiento_1' },
                { texto: 'Una aplicación funciona muy lentamente.', siguiente: 'aplicacion_1' },
                { texto: 'Funciona lentamente durante juegos.', siguiente: 'juegos_1' }
            ]
        },

        // LENTITUD GENERAL

        general_1: {
            titulo: '¿La computadora tiene muchas aplicaciones abiertas cuando funciona lentamente?',
            opciones: [
                { texto: 'Sí, normalmente tengo varias aplicaciones abiertas.', siguiente: 'general_2' },
                { texto: 'No, está lenta incluso con pocas aplicaciones.', siguiente: 'general_3' },
                { texto: 'No estoy seguro.', siguiente: 'general_3' }
            ]
        },

        general_2: {
            titulo: '¿La computadora mejora cuando cierras las aplicaciones que no utilizas?',
            opciones: [
                { texto: 'Sí, mejora considerablemente.', siguiente: 'resultado_recursos' },
                { texto: 'No, continúa funcionando lentamente.', siguiente: 'general_3' }
            ]
        },

        general_3: {
            titulo: '¿El almacenamiento principal de la computadora está casi lleno?',
            opciones: [
                { texto: 'Sí, queda muy poco espacio disponible.', siguiente: 'resultado_almacenamiento' },
                { texto: 'No, todavía tengo suficiente espacio.', siguiente: 'general_4' },
                { texto: 'No sé cómo comprobarlo.', siguiente: 'resultado_revision' }
            ]
        },

        general_4: {
            titulo: '¿Notas que la computadora se calienta demasiado cuando funciona lentamente?',
            opciones: [
                { texto: 'Sí, se calienta bastante.', siguiente: 'resultado_temperatura' },
                { texto: 'No, su temperatura parece normal.', siguiente: 'resultado_revision' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision' }
            ]
        },

        // INICIO LENTO

        inicio_1: {
            titulo: '¿La computadora tarda mucho en llegar al escritorio después de encender?',
            opciones: [
                { texto: 'Sí, tarda demasiado antes de mostrar el escritorio.', siguiente: 'inicio_2' },
                { texto: 'No, llega rápido al escritorio, pero después está lenta.', siguiente: 'inicio_3' }
            ]
        },

        inicio_2: {
            titulo: '¿El equipo utiliza un disco duro tradicional (HDD) o una unidad SSD?',
            opciones: [
                { texto: 'Utiliza un disco duro HDD.', siguiente: 'resultado_disco' },
                { texto: 'Utiliza una unidad SSD.', siguiente: 'resultado_inicio' },
                { texto: 'No sé qué tipo de almacenamiento utiliza.', siguiente: 'resultado_inicio' }
            ]
        },

        inicio_3: {
            titulo: '¿Se abren muchas aplicaciones automáticamente cuando inicia el sistema?',
            opciones: [
                { texto: 'Sí, se abren varias aplicaciones.', siguiente: 'resultado_inicio' },
                { texto: 'No, casi ninguna aplicación se abre automáticamente.', siguiente: 'resultado_revision' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_inicio' }
            ]
        },

        // CONGELAMIENTOS

        congelamiento_1: {
            titulo: '¿Los congelamientos ocurren cuando utilizas varias aplicaciones simultáneamente?',
            opciones: [
                { texto: 'Sí, especialmente cuando abro varias aplicaciones.', siguiente: 'resultado_recursos' },
                { texto: 'No, también ocurre con una sola aplicación.', siguiente: 'congelamiento_2' },
                { texto: 'Ocurren de manera aparentemente aleatoria.', siguiente: 'congelamiento_2' }
            ]
        },

        congelamiento_2: {
            titulo: '¿El equipo presenta temperaturas elevadas o ventiladores muy ruidosos antes de congelarse?',
            opciones: [
                { texto: 'Sí, se calienta o los ventiladores hacen mucho ruido.', siguiente: 'resultado_temperatura' },
                { texto: 'No, no he observado esos síntomas.', siguiente: 'congelamiento_3' },
                { texto: 'No estoy seguro.', siguiente: 'congelamiento_3' }
            ]
        },

        congelamiento_3: {
            titulo: '¿Los congelamientos comenzaron después de instalar o actualizar algún programa?',
            opciones: [
                { texto: 'Sí, comenzaron después de una instalación o actualización.', siguiente: 'resultado_software' },
                { texto: 'No, ocurren desde hace bastante tiempo.', siguiente: 'resultado_revision' },
                { texto: 'No recuerdo cuándo comenzaron.', siguiente: 'resultado_revision' }
            ]
        },

        // APLICACIONES LENTAS

        aplicacion_1: {
            titulo: '¿El problema ocurre únicamente con una aplicación?',
            opciones: [
                { texto: 'Sí, solamente con una aplicación.', siguiente: 'aplicacion_2' },
                { texto: 'No, varias aplicaciones funcionan lentamente.', siguiente: 'general_1' }
            ]
        },

        aplicacion_2: {
            titulo: '¿La aplicación comenzó a funcionar lentamente después de una actualización?',
            opciones: [
                { texto: 'Sí, después de actualizarla.', siguiente: 'resultado_software' },
                { texto: 'No, siempre ha funcionado lentamente.', siguiente: 'aplicacion_3' },
                { texto: 'No estoy seguro.', siguiente: 'aplicacion_3' }
            ]
        },

        aplicacion_3: {
            titulo: '¿La computadora cumple los requisitos recomendados de esa aplicación?',
            opciones: [
                { texto: 'Sí, cumple los requisitos.', siguiente: 'resultado_software' },
                { texto: 'No, sus componentes son inferiores a los recomendados.', siguiente: 'resultado_requisitos' },
                { texto: 'No conozco los requisitos.', siguiente: 'resultado_requisitos' }
            ]
        },

        // JUEGOS

        juegos_1: {
            titulo: '¿La lentitud ocurre en todos los juegos o solamente en uno?',
            opciones: [
                { texto: 'Ocurre en varios juegos.', siguiente: 'juegos_2' },
                { texto: 'Ocurre solamente en un juego.', siguiente: 'juegos_3' }
            ]
        },

        juegos_2: {
            titulo: '¿El equipo se calienta demasiado mientras juegas?',
            opciones: [
                { texto: 'Sí, presenta temperaturas elevadas.', siguiente: 'resultado_temperatura' },
                { texto: 'No, su temperatura parece normal.', siguiente: 'resultado_recursos' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_revision' }
            ]
        },

        juegos_3: {
            titulo: '¿El equipo cumple los requisitos recomendados del juego?',
            opciones: [
                { texto: 'Sí, cumple los requisitos.', siguiente: 'resultado_software' },
                { texto: 'No, sus componentes son inferiores a los recomendados.', siguiente: 'resultado_requisitos' },
                { texto: 'No estoy seguro.', siguiente: 'resultado_requisitos' }
            ]
        }
    },

    resultados: {
        resultado_recursos: {
            titulo: 'Posible consumo elevado de recursos',
            descripcion: 'La lentitud podría estar relacionada con el uso elevado de memoria RAM, procesador u otros recursos del equipo.',
            recomendaciones: [
                'Cierra las aplicaciones que no necesites.',
                'Revisa el consumo de CPU y memoria desde el Administrador de tareas.',
                'Evita ejecutar demasiados programas simultáneamente.',
                'Comprueba si alguna aplicación utiliza recursos de manera excesiva.'
            ]
        },

        resultado_almacenamiento: {
            titulo: 'Posible falta de espacio de almacenamiento',
            descripcion: 'El almacenamiento casi lleno podría afectar el rendimiento del sistema y de algunas aplicaciones.',
            recomendaciones: [
                'Comprueba el espacio disponible en la unidad principal.',
                'Elimina archivos temporales mediante las herramientas del sistema.',
                'Desinstala aplicaciones que ya no utilices.',
                'Respalda los archivos importantes antes de eliminar información.'
            ]
        },

        resultado_temperatura: {
            titulo: 'Posible reducción del rendimiento por temperatura',
            descripcion: 'Las temperaturas elevadas podrían provocar que el equipo reduzca automáticamente su rendimiento para proteger sus componentes.',
            recomendaciones: [
                'Comprueba que las entradas de ventilación estén despejadas.',
                'Utiliza el equipo sobre una superficie firme y ventilada.',
                'Evita utilizarlo en ambientes excesivamente calientes.',
                'Solicita una revisión técnica si presenta sobrecalentamiento frecuente.'
            ]
        },

        resultado_disco: {
            titulo: 'Posible limitación del disco duro',
            descripcion: 'Un disco duro mecánico puede ofrecer tiempos de inicio y carga mayores que una unidad SSD. Esto podría contribuir a la lentitud observada.',
            recomendaciones: [
                'Comprueba el estado y el espacio disponible del disco.',
                'Revisa las aplicaciones que se ejecutan al iniciar.',
                'Mantén una copia de seguridad de tus archivos importantes.',
                'Considera consultar la compatibilidad del equipo con una unidad SSD.'
            ]
        },

        resultado_inicio: {
            titulo: 'Posible problema de rendimiento durante el inicio',
            descripcion: 'El inicio lento podría estar relacionado con aplicaciones automáticas, almacenamiento o procesos del sistema.',
            recomendaciones: [
                'Revisa las aplicaciones configuradas para iniciar automáticamente.',
                'Deshabilita del inicio las aplicaciones que reconozcas y no necesites.',
                'Comprueba el espacio disponible en el almacenamiento.',
                'Revisa si existen actualizaciones pendientes del sistema.'
            ]
        },

        resultado_software: {
            titulo: 'Posible problema de software',
            descripcion: 'La lentitud podría estar relacionada con una aplicación, sus actualizaciones o su configuración.',
            recomendaciones: [
                'Comprueba si existen actualizaciones oficiales de la aplicación.',
                'Reinicia la aplicación y verifica si el problema continúa.',
                'Revisa sus requisitos y configuración.',
                'Evita descargar programas de reparación de fuentes desconocidas.'
            ]
        },

        resultado_requisitos: {
            titulo: 'Posible limitación de los componentes del equipo',
            descripcion: 'El rendimiento podría estar relacionado con los requisitos de la aplicación o juego y las capacidades del hardware disponible.',
            recomendaciones: [
                'Consulta los requisitos mínimos y recomendados del programa.',
                'Compara esos requisitos con los componentes de tu computadora.',
                'Reduce la configuración gráfica o de rendimiento cuando corresponda.',
                'Considera una evaluación técnica antes de actualizar componentes.'
            ]
        },

        resultado_revision: {
            titulo: 'Se necesita una revisión adicional del rendimiento',
            descripcion: 'Las respuestas todavía no permiten identificar una causa predominante. El problema podría relacionarse con software, almacenamiento, temperatura o recursos.',
            recomendaciones: [
                'Observa en qué momentos ocurre la lentitud.',
                'Comprueba el uso de CPU, memoria y disco.',
                'Revisa el espacio disponible en el almacenamiento.',
                'Mantén respaldos de tus archivos importantes.',
                'Solicita una revisión técnica si el problema persiste.'
            ]
        }
    }
};

export default rendimiento;