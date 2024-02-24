# pull official base image
FROM node:18

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# RUN npm install react-router-dom

COPY . .

# start app
CMD ["vite", "--host"]
# CMD ["npm", "run", "dev"]
