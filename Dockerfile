FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm build

COPY . .

EXPOSE 3030
CMD [ "node", "dist/app.js"]