FROM node:14-alpine

WORKDIR /app

# Install global dependencies
RUN npm install vite --global

# Install app dependencies
COPY package*.json ./
RUN npm install --unsafe-perm=true --allow-root

# Copy app source code
COPY . .

# Build app
RUN npm run build

RUN npm install @vitejs/plugin-vue --unsafe-perm=true --allow-root
# Start app
CMD [ "npm", "run", "dev", "--unsafe-perm=true", "--allow-root"]

