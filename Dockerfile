# ---------- 1. Base Image ----------
FROM node:20-alpine AS base
WORKDIR /app

# ---------- 2. Install Dependencies ----------
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

# ---------- 3. Build Application ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- 4. Production Runner ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
