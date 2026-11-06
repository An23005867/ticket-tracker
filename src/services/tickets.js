const SUPABASE_URL = 'https://spqvojmddodpcaosruiy.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

async function solicitarTicket(funcion, datos) {
    if (!SUPABASE_KEY) {
        throw new Error('Falta configurar la clave pública de Supabase.');
    }

    let respuesta;

    try {
        respuesta = await fetch(`${SUPABASE_URL}/functions/v1/${funcion}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`
            },
            body: JSON.stringify(datos)
        });
    } catch {
        throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
    }

    let resultado;

    try {
        resultado = await respuesta.json();
    } catch {
        throw new Error('El servidor devolvió una respuesta inválida.');
    }

    if (!respuesta.ok) {
        throw new Error(resultado.error || 'No se pudo completar la solicitud.');
    }

    return resultado;
}

export async function crearTicket(datos, turnstileToken, idempotencyKey) {
    return solicitarTicket('crear-ticket-publico', {
        tipo_equipo: datos.tipoEquipo,
        marca: datos.marca,
        categoria: datos.categoria,
        diagnostico: datos.diagnostico,
        nombre_cliente: datos.nombreCliente || null,
        telefono: datos.telefono || null,
        modelo: datos.modelo || null,
        sistema_operativo: datos.sistemaOperativo || null,
        componentes: datos.componentes || null,
        descripcion: datos.descripcion || null,
        detalle: datos.detalle || null,
        idempotency_key: idempotencyKey,
        turnstile_token: turnstileToken
    });
}

export async function consultarTicket(codigo, token) {
    return solicitarTicket('consultar-ticket-publico', {
        codigo: codigo.trim().toUpperCase(),
        token: token.trim()
    });
}