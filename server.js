//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/springboot-blog-api'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/springboot-blog-api/index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);