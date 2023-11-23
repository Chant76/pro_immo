const User = require('../entity/Users.js');
const UserRepository = require('../repository/UsersRepository.js');
const bcrypt = require('bcryptjs');

class RegisterController{


    inscript (request, response) {
        response.render('register/inscript')
    }

    
    


    process(request, response) {
        let entity = new User();
        entity.setEmail(request.body.email)
            .setPassword(request.body.password)
            .setCivility(request.body.civility)
            .setLastname(request.body.lastname)
            .setFirstname(request.body.firstname)
            .setPhone(request.body.phone)
        
            entity.password = bcrypt.hashSync(entity.password, bcrypt.genSaltSync(10));   

        const UserRepo = new UserRepository();
        UserRepo.existsEmail(entity.getEmail()).then(emailexists => {
            // console.log(emailexists);
            if(emailexists) {
                // on renvoi le formulaire avec une erreur
				response.render('register/inscript', {
                    error : `L'adresse Email existe déjà dans notre base de données.`
                });
            } else {
                // On enregistre en BDD
                UserRepo.add(entity);
                    request.flash('notify', 'Votre compte a bien été créé.');
                    response.redirect('/');
            }
        })
        
    }

    
    
};


module.exports = new RegisterController();