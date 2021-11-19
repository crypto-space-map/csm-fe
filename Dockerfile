
FROM node:16-stretch as build

COPY . /app/

WORKDIR /app/
RUN npm ci
RUN npm run build
RUN rm -fr /root/.npm

# production environment
FROM nginx:stable-alpine as prod
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY --from=build /app/build /usr/share/nginx/html
COPY /config/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
