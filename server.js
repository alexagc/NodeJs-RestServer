const server = require('./app/main');

const mongoDatabase = 'mongodb://localhost/test';

server.connectDatabase(mongoDatabase)
  .then(() => {
    console.log('Connection succesfull to database');
    server.startServer();
  })
  .catch((err) => {
    console.log(`ERROR: connecting to Database. ${err}`);
  });
