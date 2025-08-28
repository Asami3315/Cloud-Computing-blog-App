FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy source codez
COPY . .

# Expose backend port
EXPOSE 5000

CMD ["npm", "start"]

