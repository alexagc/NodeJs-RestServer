const server = require('./app/main');

// Configure node to differents launch profiles profiles
let mongoDatabase;
switch (process.env.NODE_ENV) {
  case 'production':
    mongoDatabase = 'mongodb://localhost/test';
    break;
  default:
    mongoDatabase = 'mongodb://localhost/test';
    break;
}

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
