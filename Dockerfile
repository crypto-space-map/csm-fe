
# FROM node:16-stretch as build

FROM node:17-stretch as build

COPY . /app/

WORKDIR /app/
RUN npm i
RUN npm run build
RUN rm -fr /root/.npm

EXPOSE 8080
CMD ["npm", "run", "start:prod"]
