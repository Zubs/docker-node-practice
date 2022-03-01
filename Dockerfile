FROM node:14

WORKDIR /app

COPY src /app

RUN npm install

EXPOSE 1234

CMD npm start
