# joucode-dev · Portafolio de Josue Salazar

Portafolio personal de Josue Salazar, fundador y CEO de API SERVICE SAC. Astro 7 y Tailwind 4, desplegado en
Cloudflare Workers con la misma configuración que la web de Dooprint (`web-dooprint`).

## Contenido

Todo el contenido está en **`src/data/perfil.ts`** (persona, empresa, productos, soluciones, trayectoria, formación
y stack). La página es `src/pages/index.astro`; los íconos, `src/components/Icono.astro`; los colores y las
fuentes, `src/styles/global.css` (`@theme` de Tailwind 4; ya no hay `tailwind.config`).

- Enfoque: fundador y CEO de API SERVICE SAC y líder técnico.
- Nombres: **API SERVICE SAC** siempre en mayúsculas; **Dooservice** y **Dooprint** solo con la D mayúscula
  (los dominios, en minúscula).
- Logos en `public/marca/` (clientes copiados de apiservicesac.com); capturas en `public/images/projects/`.
- Estilo: claro, azul de API SERVICE SAC (#1064EA) y tipografía Archivo (la de apiservicesac.com).

## Comandos

| Comando           | Qué hace                                          |
| :---------------- | :------------------------------------------------ |
| `pnpm install`    | Instala dependencias                              |
| `pnpm dev`        | Servidor de desarrollo en `localhost:4321`        |
| `pnpm build`      | Compila a `./dist/`                               |
| `pnpm check`      | Revisa tipos con `astro check`                    |
| `pnpm deploy`     | Compila y publica en Cloudflare (`wrangler.jsonc`) |
| `pnpm cf-typegen` | Regenera los tipos de las bindings de Workers     |

## En el servidor (pnpm solo dentro de Docker)

En este servidor no se instala pnpm: todo corre en un contenedor `node:22-bookworm`.

```bash
# Instalar o añadir dependencias
docker run --rm -u $(id -u):$(id -g) -e HOME=/tmp -v $PWD:/app -w /app node:22-bookworm npx -y pnpm@latest install

# Vista en vivo en http://<servidor>:31306
docker run -d --name joucode-dev --restart unless-stopped -u $(id -u):$(id -g) -e HOME=/tmp \
  -e NODE_OPTIONS=--dns-result-order=ipv4first -p 31306:4321 -v $PWD:/app -w /app \
  node:22-bookworm npx astro dev --host 0.0.0.0 --port 4321
```

`NODE_OPTIONS=--dns-result-order=ipv4first` hace falta dentro de Docker: sin él, `astro build` falla en
"generating static routes" con `ECONNREFUSED 127.0.0.1`, porque el prerender de Cloudflare escucha en
`localhost` por IPv6. En Cloudflare no hace falta.
