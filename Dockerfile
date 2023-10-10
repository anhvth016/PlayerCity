# Build phase
FROM node:16.16.0-alpine as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build


# Deploy Phase
FROM nginx:1.25.1-alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENV NODE_ENV=production
ENTRYPOINT ["nginx", "-g", "daemon off;"]