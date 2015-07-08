######################################################################################################################
# 
# Ubuntu 14.04 Base
# 
######################################################################################################################

FROM ubuntu:14.04

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get -yq update && apt-get upgrade -yq && apt-get install -y \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    libssl-dev


######################################################################################################################
# 
# Node.js
# 
######################################################################################################################

ENV NODE_VERSION 0.12.6
ENV NVM_DIR      /usr/local/nvm

# Install Node.js and NPM via NVM
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Globalize the path
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH


######################################################################################################################
# 
# AwfulPicks
# 
######################################################################################################################

# Cache any Node.js dependencies with Docker
RUN mkdir -p /opt/app
ADD package.json /opt/app/package.json
WORKDIR /opt/app
RUN npm install

# Layer in our application
ADD . /opt/app

EXPOSE 3000

CMD ["npm", "start"]
