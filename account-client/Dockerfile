FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH - allow running 'vite'
#ENV PATH /app/node_modules/.bin:$PATH

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies


# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
RUN npm install --unsafe-perm=true --allow-root
RUN npm install vite@4.0.0 --unsafe-perm=true --allow-root
#RUN chown -R node ~/.npm
#RUN chown -R node /app/node_modules/
CMD [ "npm", "run", "dev", "--unsafe-perm=true", "--allow-root"]