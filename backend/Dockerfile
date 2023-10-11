
FROM node:16.16.0-alpine3.16 as node

# Build phase
FROM node AS builder
WORKDIR /backend
COPY ./package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build


# Deploy Phase
FROM node AS final
WORKDIR /backend
RUN mkdir -p ./dist
COPY ./package*.json ./
RUN npm i --only=production --legacy-peer-deps

# Copy transpiled js from builder stage into the final image
COPY --from=builder /backend/dist ./dist
 # Uncomment on development
COPY --from=builder /backend/.env* ./


# Open desired port
EXPOSE 8000

# Use js files to run the application

ENV NODE_ENV=production
ENTRYPOINT ["node", "./dist/server.js"]

