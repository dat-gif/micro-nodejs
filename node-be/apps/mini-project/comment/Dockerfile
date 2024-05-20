FROM node:14-alpine

WORKDIR /usr/app/post

#this part not standard due to sharing package.json a crossing services
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run","start:comments"]