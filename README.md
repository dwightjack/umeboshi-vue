# Umeboshi Vue.js Template

## Features

* [Vue.js](https://vuejs.org/) and [Webpack 2](https://webpack.js.org/) with HMR 
* ES6+ with [Babel](https://babeljs.io/)
* Unit test with [Jest](https://facebook.github.io/jest/)
* CSS and JS linting with [ESLint](http://eslint.org/) (airbnb preset) and [Stylelint](https://stylelint.io/)
* [Sass](http://sass-lang.com/) with [node-sass](https://github.com/sass/node-sass) 
* CSS [post-processing](https://github.com/postcss/postcss)
* [CSS Modules](https://github.com/css-modules/css-modules)
* Em based media-queries via [sass-mq](https://github.com/sass-mq/sass-mq)

## Requirements

* Node.js >= 6.9.0 (we strongly suggest to use something like [nvm](https://github.com/creationix/nvm))
* npm or [yarn](https://yarnpkg.com/lang/en/)

## Installation

Install [umeboshi-cli](https://github.com/dwightjack/umeboshi-cli) if not yet installed

```
$ npm install -g umeboshi-cli
```

Use `vue` as template

```
$ umeboshi create vue <project-folder>
```

Example: 

```
$ umeboshi create vue my-project-folder
```