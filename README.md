# Feathers + Vue.js Boilerplate

## A Node Server and Front-End Framework Pairing

This is a boilerplate using [Feathers 3](https://feathersjs.com/) and [Vue.js 2](https://vuejs.org/). I've used this combination twice and I think I will use it again, so I will attempt to maintain this base.

### Why?

Since Feathers.js runs on the server, you're able to access the file system. This makes it useful for creating an interface in Vue to interact with the server. I've used it to run headless browsers and manage files locally.

### Features

- Utilizes [Vue CLI 3](https://cli.vuejs.org/), so the build process is always kept up to date.
- Follows Vue's style guide (WIP).

## Usage

For development, run `npm run dev:client` to run the Vue dev server and `npm run dev` to start the Feathers app.

## Future Plans

- Sort ESLint and Prettier. Honestly, the two in conjunction confuse me. I'll sort it out at some point.
- Allow [Feathers CLI](https://github.com/feathersjs/cli) to work with new folder structure.
