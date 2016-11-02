const server = require('./app/main');

const mongoDatabase = 'mongodb://localhost/test';

function start() {
  server.connectDatabase(mongoDatabase)
    .then(() => {
      console.log('Connection succesfull to database');
      server.startServer();
    })
    .catch((err) => {
      console.log(`ERROR: connecting to Database. ${err}`);
      console.log('Trying to connect in 5 seconds');
      setTimeout(() => {
        start();
      }, 5000);

    });
}

start();
