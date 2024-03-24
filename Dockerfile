FROM oven/bun

WORKDIR /usr/src/joucode_dev

# Copiar package.json y .env
COPY package.json .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 6060

CMD ["bun", "run", "start"]