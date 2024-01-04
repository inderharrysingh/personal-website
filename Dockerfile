FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app

ARG SANITY_ID

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${SANITY_ID} 
ENV NEXT_PUBLIC_SANITY_DATASET="production"
ENV SANITY_API_READ_TOKEN=;

COPY package*.json ./
EXPOSE 3000





FROM base as builder
WORKDIR /app
COPY . .
SHELL ["/bin/ash", "-c"]
RUN npm install 
RUN  npm run build






FROM base as production
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
SHELL ["/bin/ash", "-c"]
CMD npm start




