FROM node:19.2.0-alpine

WORKDIR /usr/src/app/front

COPY package*.json .

RUN npm install

RUN mkdir -p /usr/src/app/front/node_modules/.cache && chmod -R 777 /usr/src/app/front/node_modules/.cache

# COPY . .

EXPOSE 8889

CMD ["npm", "start"]