FROM node:18-alpine

WORKDIR /app

RUN apk update && apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

# Copy all app files
COPY . .

# Make start script executable
RUN chmod +x start.sh

RUN npm run build

EXPOSE 3000

# Use your start script as the entry point
CMD ["./start.sh"]