
FROM node:9-alpine

# Create App directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install
COPY . .

CMD ./node_modules/.bin/webpack --mode=production --profile 
