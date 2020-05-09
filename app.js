///Project Is Node.js with handlebars
// Developed By :Yub Uddin
//DEveloped date:5/08/2020
//============================================================

var exp = require("express");
var app = exp();
var bodyparser = require('body-parser');
var session = require('express-session');
var routes = require("./routes/routes.js");
var hbars = require('express-handlebars');
app.use(exp.static(__dirname + "/public"));


//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//Session
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
//handleBars
app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({
    extname: '.hbs',
    defaultLayout: null
}));
/// Routes Variable 

app.get('/', routes.loginPageHandler);
app.get('/toLanding', routes.landingPageHandler);
app.post('/toCity', routes.cityPageHandler);


var port = process.env.PORT || 4000;
app.listen(port, function(params) {
    console.log("Server is listing on port" + port);
});