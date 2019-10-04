FROM node:10

WORKDIR /usr/src/dnt

COPY package.json /usr/src/dnt

RUN npm i

COPY . /usr/src/dnt

RUN npm build 

ENV NODE_ENV=DOCKER


EXPOSE 5000


CMD ["npm", "start"]

# CMD ["/bin/bash"]
