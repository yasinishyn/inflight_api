FROM node:latest
RUN mkdir -p /usr/src/inflight_api
WORKDIR /usr/src/inflight_api
RUN yarn global add nodemon
RUN yarn global add typescript
COPY . /usr/src/inflight_api
RUN yarn
EXPOSE 3030
CMD ["yarn", "run", "start"]