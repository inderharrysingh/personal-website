FROM node:18-alpine as base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app


ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${SANITY_ID} 
ENV NEXT_PUBLIC_SANITY_DATASET="production"
ENV SANITY_API_READ_TOKEN=;

ARG SANITY_ID

COPY package*.json ./

EXPOSE 3000


COPY . .

SHELL ["/bin/ash", "-c"]

RUN npm install 

RUN  npm run build

RUN npm start 


