import { supabase } from './supabase';

export async function iniciarSesion(correo, contrasena) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: correo.trim(),
        password: contrasena
    });

    if (error) {
        throw new Error('Correo electrónico o contraseña incorrectos.');
    }

    const { data: autorizado, error: errorPermisos } =
        await supabase.rpc('es_tecnico');

    if (errorPermisos || autorizado !== true) {
        await supabase.auth.signOut();
        throw new Error('Esta cuenta no tiene permisos de técnico.');
    }

    return data.user;
}

export async function obtenerTecnico() {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) return null;

    const { data: autorizado, error: errorPermisos } =
        await supabase.rpc('es_tecnico');

    if (errorPermisos || autorizado !== true) return null;

    return user;
}

export async function cerrarSesion() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error('No se pudo cerrar la sesión.');
    }
}