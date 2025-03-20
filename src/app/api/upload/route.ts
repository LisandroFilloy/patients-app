import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

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
    
    // Definir la ruta donde se guardarán las imágenes
    const publicDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(publicDir, fileName);

    // Convertir el archivo a un Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Guardar el archivo
    await writeFile(filePath, buffer);

    // Devolver la URL relativa
    const imageUrl = `/uploads/${fileName}`;
    
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return NextResponse.json(
      { error: 'Error al procesar el archivo' },
      { status: 500 }
    );
  }
}