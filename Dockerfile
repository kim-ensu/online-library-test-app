FROM node:16.15.1-buster as build

WORKDIR /code

COPY package.json .
COPY package-lock.json .

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX Web Server
FROM nginx:1.22-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]