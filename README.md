# npm build tool

A barebones Node.js app using [Express 4](http://expressjs.com/).

CI/CD Travis deployed @Heroku


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone or clone your own fork
$ cd
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Deploy

Sample app is deployed at: [https://whispering-caverns-63157.herokuapp.com/](https://whispering-caverns-63157.herokuapp.com/)
travis gem is installed. It will allow us to encrypt the token when deploying with travis by adding a line with the api_key in `.travis.yml`.
run `travis encrypt $(heroku auth:token) --add deploy.api_key` in the terminal.

PR on PR-test branch
useless line xD

# App deployed @Heroku
staging: https://staging-tool.herokuapp.com/
production: https://production-tool.herokuapp.com/
