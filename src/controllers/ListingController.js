const UserRepository = require("../repository/UsersRepository");

class ListingController {

    listing(request, response) {
        const rep = new UserRepository();
        rep.getUsers().then((users) => {
            response.render('listutilisateur/listing' ,{users})
        })
    }  
}

module.exports = new ListingController();
