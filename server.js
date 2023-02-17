// requiring express, routes, and the configuration
const express = require('express');
const routes = require('./routes');
const sequelize = require ('./config/connection.js')
// making it to where express is easy to use and setting up the server port
const app = express();
const PORT = process.env.PORT || 3001;
// parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// using the routes
app.use(routes);

// hooking up sequelize and the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

});

