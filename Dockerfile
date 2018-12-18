FROM node:11.3.0-alpine

WORKDIR /usr/src/app

# If package.json uses git, uncomment this
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache git

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

# If going ENTERPRISE-SCALE, run build:storybook and serve that instead.
ARG NODE_ENV=production
COPY . /usr/src/app

CMD ["yarn", "storybook"]
