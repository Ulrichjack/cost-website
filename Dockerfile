# syntax=docker/dockerfile:1

# Build the Astro static site with the lockfile for reproducible installs.
FROM node:22-alpine AS builder

WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1

# URL canonique du site — fournie par docker-compose (Dokploy Settings > Environment)
ARG SITE_URL=https://www.cost237.com
ENV SITE_URL=$SITE_URL

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# Serve only the generated HTML/CSS/JS with Nginx in production.
FROM nginx:1.27-alpine AS server

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

