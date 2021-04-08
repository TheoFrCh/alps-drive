const http = require('http');
const app = require('./server');

app.set('port', process.env.PORT || 3000); //defini le port

const server = http.createServer(app);


server.listen(process.env.PORT || 3000); //ecouter sur le port 3000

//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express