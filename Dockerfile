FROM node:latest AS build

WORKDIR /usr/src/joucode_dev

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/joucode_dev/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 6060

CMD ["nginx", "-g", "daemon off;"]
