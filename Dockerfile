FROM node:14

WORKDIR /app/src

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 3331

CMD ["yarn", "dev"]

