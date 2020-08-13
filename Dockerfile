
FROM node:14.8.0

WORKDIR /

#ENV PATH /app/node_modules/.bin$PATH

COPY package.json .

RUN npm install

EXPOSE 8003

CMD npm start

COPY . .