# libui-boilerplate

[![Build Status](https://travis-ci.org/gyng/libui-boilerplate.svg?branch=master)](https://travis-ci.org/gyng/libui-boilerplate)

Personal boilerplate for a React UI component library using TypeScript and PostCSS. Includes linting and testing.

## Usage

See [`package.json`](./package.json) for all scripts

```
yarn
yarn d                   # runs storybook
yarn test                # runs jest
yarn lint
yarn lint:fix
yarn build
yarn build:storybook
yarn tcm:gen             # generate TS types for CSS
DEBUG=1 yarn build       # skips minification
```

You can use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) when developing against another application.

## Docker

Docker compose configurations are provided for test and storybook deployment.

```
$ yarn storybook:docker
docker-compose -f docker-compose.yml up --build

$ yarn test:docker
docker-compose -f docker-compose.test.yml up --build
```

## TODO

* documentation
* scripts for publishing to npm?
