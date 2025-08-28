FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=8080
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true

EXPOSE 8080

CMD ["npm", "start"]
