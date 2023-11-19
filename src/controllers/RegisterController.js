class RegisterController{


    inscript (request, response) {
        response.render('register/inscript')
    }
};
module.exports = new RegisterController();