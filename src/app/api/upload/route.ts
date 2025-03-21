import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Inicializar el cliente de Supabase con la anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verificar que las variables de entorno estén definidas
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Las variables de entorno NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY son requeridas');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se proporcionó ningún archivo' },
        { status: 400 }
      );
    }

    // Crear un nombre de archivo único
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    
    // Convertir el archivo a un Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload file to Supabase Storage
    const { error } = await supabase
      .storage
      .from('patient-images') // Supabase bucket name
      .upload(fileName, buffer, {
        contentType: file.type,
        cacheControl: '3600'
      });

    if (error) {
      console.error('Error al subir a Supabase:', error);
      return NextResponse.json(
        { error: 'Error al subir la imagen a Supabase' },
        { status: 500 }
      );
    }

    // Get public URL of the file
    const { data: urlData } = supabase
      .storage
      .from('patient-images')
      .getPublicUrl(fileName);

    const imageUrl = urlData.publicUrl;
    
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return NextResponse.json(
      { error: 'Error al procesar el archivo' },
      { status: 500 }
    );
  }
}