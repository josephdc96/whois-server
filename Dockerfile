FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build

EXPOSE 3030
CMD [ "node", "dist/app.js"]
