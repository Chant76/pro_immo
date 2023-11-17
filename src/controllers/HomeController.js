class HomeController{

    index (request, response) {
        response.render('index')
    }

    inscript (request, response) {
        response.render('inscript')
    }
};

module.exports = new HomeController();