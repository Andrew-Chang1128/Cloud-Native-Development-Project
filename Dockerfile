FROM node:14

# Create node moudles directory
RUN ["mkdir", "/install"]
WORKDIR /install

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

RUN npm install -g nodemon

ENV NODE_PATH=/install/node_modules
# ENV NODE_PATH=/usr/node_modules/node_modules

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 5000
CMD [ "nodemon", "server.js" ]