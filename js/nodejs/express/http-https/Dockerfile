FROM node:10

ARG httpPort=80
ARG httpsPort=443

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV HTTP_PORT=${httpPort}
ENV HTTPS_PORT=${httpsPort}
ENV KEY_ABSOLUTE_PATH=/tls/tls.key 
ENV CERTIFICATE_ABSOLUTE_PATH=/tls/tls.crt

EXPOSE ${httpPort}
EXPOSE ${httpsPort}

CMD [ "node", "index.js" ]