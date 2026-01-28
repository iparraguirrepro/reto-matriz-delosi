# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
# COPY .env.development ./.env

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build

# Production stage
FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y dumb-init && rm -rf /var/lib/apt/lists/*

# Copiar solo los archivos necesarios del builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Usar dumb-init para ejecutar Node.js
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
