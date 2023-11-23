const UserRepository = require("../repository/UsersRepository.js");

class UserController {

    delete (request, response) {
        const repo = new UserRepository();
        repo.getUsers().then((users) => {
            response.render('admin/user/delete', {users})
        });
    }

    deleteUser (request, response) {
        const repo = new UserRepository();
        repo.deleteUser(request.params.id).then(() => {
            request.flash("notify", "L'utilisateur a bien été supprimé.")
            response.redirect("/listing");
        })
    }



};

module.exports = new UserController();