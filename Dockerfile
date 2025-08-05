FROM node:22.18-alpine

WORKDIR /app
COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
