//route handler for home path
exports.loginPageHandler = function(req, res) {
    req.session.destroy();
    res.render('login.handlebars', {});
};


exports.landingPageHandler = function(req, res) {
    var parson;
    if (req.session.userName) {
        person = req.session.userName
    } else {
        person = req.query.nm;
        req.session.userName = person;
    }
    res.render('landingpage.handlebars', { welcomeMessage: person });
};




exports.cityPageHandler = function(req, res) {
    var interestValue = req.body.interest;
    var personName = req.session.userName;
    var taglineValue, cityNameValue;

    if (interestValue === 'fashion') {
        cityNameValue = "paris";
        taglineValue = "Fashion Capital of the world";
    } else if (interestValue === 'history') {
        cityNameValue = "Rome";
        taglineValue = "Early civilization";
    } else if (interestValue === 'finance') {
        cityNameValue = "New York";
        taglineValue = "capital of the world Business";
    };
    res.render('city.handlebars', { welcomeMessage: person, cityName: cityNameValue, tagline: taglineValue });


};


//module.exports.cityFn = cityR;
//module.exports.homeFn = homeR;