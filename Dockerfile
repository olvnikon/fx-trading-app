FROM node:8.11.4-alpine
WORKDIR /usr/src/app
RUN npm install -g yarn
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn start
