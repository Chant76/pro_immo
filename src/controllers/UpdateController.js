const UserRepository = require("../repository/UsersRepository.js");
const User = require('../entity/Users.js');
class UpdateController {

    modif (request, response) {
        const repo = new UserRepository();
        repo.getUserById(request.params.id).then((user) => {
            response.render('update/modif', {user})
        });
    }  

    updateUser (request, response) {
        let entity = new User();
        entity.setEmail(request.body.email)
            .setCivility(request.body.civility)
            .setLastname(request.body.lastname)
            .setFirstname(request.body.firstname)
            .setPhone(request.body.phone)

        const repo = new UserRepository();
        repo.updateUser(entity, request.params.id).then(() => {
            request.flash("notify", "L'utilisateur a bien modidier.")
            //response.redirect("/update/modif/"+request.params.id);
            response.redirect('/listing');
        })
    }
}

module.exports = new UpdateController();