#!/bin/sh

# Esperar a que la base de datos esté lista
echo "Waiting for database to be ready..."
while ! nc -z db 5432; do
  sleep 1
done

# Ejecutar migraciones
npx prisma migrate deploy

# Iniciar la aplicación
npm start 