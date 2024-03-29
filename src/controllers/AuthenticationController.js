const UserRepository = require('../repository/UsersRepository.js');
const bcrypt = require('bcryptjs');

class AuthenticationController {

    connexion (request, response) {
        response.render('authentication/connexion')
    }

    process (request, response) {
        // Etape 1 : récupérer les information de l'utilisateur (via son email)
        const UserRepo = new UserRepository();
        UserRepo.getUserByEmail(request.body.email).then(infosUser => {
            // Etape 2 : Vérifier si user existe
            if(infosUser) {
                // Etape 3 : Vérifier si mot de passe correct
                if(bcrypt.compareSync(request.body.password, infosUser.password)) {
                    // Etape 4 : Maintenir la connexion de l'utilisateur
                    request.session.user = {
                        id: infosUser.id,
                        civility: infosUser.civility,
                        firstname : infosUser.firstname,
                        lastname: infosUser.lastname,
                        email: infosUser.email
                    };
                    request.flash("notify", "Vous êtes maintenant connecté.");
                    response.redirect('/');
                    return;
                }
            }
            response.render('authentication/connexion', {error : "Identifiants incorrects", email : request.body.email})
        }).catch((error) => {
            console.log(error)
        })
       
    }
    deconnect (request, response){
        request.session.user = null;
        request.flash("notify", "Vous étes maintenant déconnecté ");
        response.redirect('/');
    }

};

module.exports = new AuthenticationController();