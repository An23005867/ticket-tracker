import { supabase } from './supabase';

const estadosPermitidos = ['pendiente', 'en_proceso', 'resuelto'];

export async function obtenerTickets() {
    const { data, error } = await supabase
        .from('tickets')
        .select(`
            id,
            codigo,
            nombre_cliente,
            telefono,
            tipo_equipo,
            marca,
            modelo,
            sistema_operativo,
            componentes,
            categoria,
            diagnostico,
            descripcion,
            detalle,
            estado,
            fecha_creacion,
            fecha_actualizacion,
            fecha_resolucion
        `)
        .order('fecha_creacion', { ascending: false });

    if (error) {
        throw new Error('No se pudieron obtener los tickets: ' + error.message);
    }

    return data || [];
}

export async function actualizarEstadoTicket(id, nuevoEstado) {
    if (!estadosPermitidos.includes(nuevoEstado)) {
        throw new Error('El estado seleccionado no es válido.');
    }

    const { data, error } = await supabase
        .from('tickets')
        .update({ estado: nuevoEstado })
        .eq('id', id)
        .select('id, codigo, estado, fecha_actualizacion, fecha_resolucion')
        .single();

    if (error) {
        throw new Error('No se pudo actualizar el ticket: ' + error.message);
    }

    return data;
}