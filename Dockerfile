# Build source code
ARG BUILDER=node:23

FROM ${BUILDER} AS builder

WORKDIR /app
COPY . /app
# compile typescript then remove dev dependencies
RUN npm ci \
    && npm run build \
    && npm install --omit=dev

# Use chainguard as minimal, secure base image to run the node app
# Refer to https://www.chainguard.dev/ for more details
FROM chainguard/node:latest
ENV NODE_ENV=production

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

ARG APP_PORT=3000
EXPOSE ${APP_PORT}
ENV PORT=${APP_PORT}

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "/app/dist/main.js"]
