// config.js

// RQUIRES
require('dotenv').config(); // this loads the defined variables from .env

const env = process.env.NODE_ENV;

const development = {
 app: {
   isDebug: true
 }
};

const test = {
 app: {
   isDebug: false
 }
};

const production = {
 app: {
   isDebug: false
 }
};

const config = {
 development,
 test,
 production
};

module.exports = config[env];
