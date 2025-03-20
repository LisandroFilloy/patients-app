export async function saveImageLocally(file: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }
  
      const data = await response.json();
      return data.imageUrl; // Esta será la ruta relativa donde se guardó la imagen
    } catch (error) {
      console.error('Error guardando la imagen:', error);
      throw error;
    }
  }