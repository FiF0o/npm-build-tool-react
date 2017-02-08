# npm build tool

A barebones Node.js app using [Express 4](http://expressjs.com/).

CI @Travis and CD @Heroku


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone <repo> or clone your own fork [https://github.com/FiF0o/npm-build-tool-react.git](https://github.com/FiF0o/npm-build-tool-react.git)
$ cd <repo>
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)


## Deploy

Sample app is deployed at: [https://npm-build-tool-react.herokuapp.com/](https://npm-build-tool-react.herokuapp.com/)

travis gem is installed. It will allow us to encrypt the token when deploying with travis by adding a line with the api_key in `.travis.yml`.
run `travis encrypt $(heroku auth:token) --add deploy.api_key` in the terminal.


## App deployed @Heroku

staging: https://staging-tool.herokuapp.com/
production: https://npm-build-tool-react.herokuapp.com/

# local webserver
port node.env or 5000, overwrite it if needed `npm config set npm-build-tool:port <YOUR PORT>`
npm config vars `npm config list | grep "npm-build-tool"`
npm env var `npm run env`

## Docker

# Create image
`docker login` using your Dockerhub credentials
`docker build -t <your username>/npm-build-tool-react`
or from your existing project if you don't want tp push it to Dockerhub
`docker build -t <image name> .`

# Run image
`docker run -p 49160:8080 -d <your dockerhub username>/npm-build-tool-react`
list your docker image `docker image ls`

# Debug container bash shell
`docker run -it <container id> /bin/bash`
`docker ps` to get container ID
run `docker ps` to kill your docker instance

port container is 8080 and your machine port is 49160
calling your app `curl -i localhost:49160`
(if curl is needed `sudo apt-get install curl` when creating the layers/image)
