// The following is in the `start.js` file

// say our sequelize instance is create in 'db.js'
const db = require('./server/db.js');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server');

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    }) // then start listening with our express server once we have synced
  })
