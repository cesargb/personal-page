FROM node:20.12-alpine

WORKDIR /app
COPY . .

ENV HOST=0.0.0.0
ENV PORT=3001

RUN yarn install
RUN yarn build

EXPOSE 3001

CMD ["node", ".output/server/index.mjs"]
