FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache openssl // openssl needed for prisma

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate


COPY . .

RUN npm run build

COPY scripts/start.sh ./
RUN chmod +x start.sh

EXPOSE 3000

CMD ["npm", "start"]