FROM node:10

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm i

COPY . /usr/src/app

RUN npm build 

ENV NODE_ENV=DOCKER


EXPOSE 5000


CMD ["npm", "start"]

# CMD ["/bin/bash"]
