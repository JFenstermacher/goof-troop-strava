# Compile using typescript
FROM node:18-alpine3.15 as ts-compiler

WORKDIR /usr/app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Production only dependencies
FROM node:18-alpine3.15 as ts-remover

WORKDIR /usr/app
COPY --from=ts-compiler /usr/app/package*.json ./
COPY --from=ts-compiler /usr/app/dist ./
RUN npm ci --omit=dev

# Distroless LEZ GO
FROM gcr.io/distroless/nodejs:18

WORKDIR /app
COPY --from=ts-remover /usr/app /app
CMD ["index.js"]
