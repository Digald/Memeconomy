# Memeconomy

Silly project about buying and selling memes in a full-stack applicaiton with some tech I am trying to learn.

This project has evolved to being a way to explore libraries and tech I've never used before such as Redux, JWT, and CSS Grid. At it's current state, the UI for the project was made as a clone of the Nintendo Switch UI and a custom login system.

I am not sure if the 'Memeconomy' idea will be fully carried out but if I have ideas on what direction to take the project I will continue in the future.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

I tried to do authentication using a combination of JSON Web Tokens and passport.js. In order to work with JSON web tokens, you need to create a .env file to hold your secret phrase for decryption.

/.env

```
JWT_SECRET=mysecretphrase
```

### Installing

Install dependencies using yarn

```
yarn install
```

Start MongoDB on localhost

```
mongod
```

To start just the server

```
yarn server
```

To start just the React client

```
yarn client
```

To run the client and server concurrently

```
yarn dev
```
On start up
![Example of what client will look like on startup](https://i.gyazo.com/cacf46899b5ec06d8a59f1fe39b34e5b.png)

Login Route
![Example of what login route looks like](https://i.gyazo.com/6104cb9ecaa78a2f48d0aba8566324e9.png)


## Built With
### Client Side
- [Create React App](https://reactjs.org/docs/getting-started.html) - View Library
- [Redux](https://redux.js.org/) - State management for React
- [Bulma](https://bulma.io/documentation/) - CSS framework mostly used for landing page

### Server Side
- [MongoDB](https://docs.mongodb.com/) - Database
- [Mongoose](http://mongoosejs.com/) - ODM for MongoDB
- [Express](https://expressjs.com/) - Server framework for Node.js
- [Passport](http://www.passportjs.org/docs/) - Server Side Authentication
- [JSON Web Tokens](https://jwt.io/) - API and user Auth

## Authors

- **Mark Alaniz**

## Status
- Still a work in progress. 8/9/2018
