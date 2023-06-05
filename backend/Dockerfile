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
RUN npm install -g nodemon
# If you are building your code for production
# RUN npm ci --omit=dev

ENV NODE_PATH=/install/node_modules
# ENV NODE_PATH=/usr/node_modules/node_modules

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 4000

# legacy
# CMD [ "node", "server.js" ] 

# auto reload
CMD [ "nodemon", "server.js" ]
