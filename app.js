var bodyParser = require('body-parser')
global.express = require('express');
var cors = require('./config/cors');
global.app = express();

app.set('JWT_TOKEN_SECRET', '121321');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ 
  extended: true
})); 
app.use(cors.permission);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

require('./routes/login')(app)