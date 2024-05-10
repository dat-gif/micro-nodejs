FROM node:14-alpine

# save project location in container
WORKDIR /usr/app

# mark using cache for node module
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]