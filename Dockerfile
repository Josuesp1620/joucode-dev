FROM node:latest

WORKDIR /usr/src/joucode_dev

# Copiar package.json y .env
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 6060

CMD ["npm", "run", "start"]