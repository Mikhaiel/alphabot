FROM node:12-slim

# Create app directory
WORKDIR /app

# Copy Package.json
COPY alphabot/package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY ./alphabot .

EXPOSE 8080
CMD ["npm", "start"]