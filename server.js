var bodyParser = require('body-parser')
global.express = require('express');
global.app = express();

app.set('JWT_TOKEN_SECRET', '121321');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ 
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.disable('etag');

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

require('./routes/login')(app);
require('./routes/BranchRoute')(app);