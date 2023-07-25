FROM node:19.6.1

# Create app directory
RUN mkdir -p /usr/src/application

WORKDIR /usr/src/application

COPY package*.json  /usr/src/application


RUN npm install

COPY . /usr/src/application/

RUN npm run build


EXPOSE 3002


CMD ["npm", "start"]
