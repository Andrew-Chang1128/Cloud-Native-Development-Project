FROM node:16.17

# Setting up the work directory
WORKDIR /usr/src/app

# Installing dependencies
COPY ./package*.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm", "start"]