FROM node:lts-alpine3.20

WORKDIR /api-cadastro

COPY package* .

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "run" ]
CMD ["dev"]
