# Étape 1 : Builder l'application Next.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json/pnpm-lock.yaml
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Build de l'application Next.js en production
RUN npm run build

# Étape 2 : Image finale pour exécuter l'application
FROM node:18-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Exposer le port sur lequel tourne Next.js
EXPOSE 3000

# Définir la variable d'environnement NODE_ENV en production
ENV NODE_ENV=production

# Lancer l'application Next.js
CMD ["npm", "start"]
