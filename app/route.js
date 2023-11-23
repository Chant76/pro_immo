module.exports = (app) =>{

    app.get('/', (request, response) => {
        let HomeController = require('../src/controllers/HomeController.js')
        HomeController.index(request,response)
    })

    app.get('/inscript', (request, response) => {
        let HomeController = require('../src/controllers/RegisterController.js')
        HomeController.inscript(request,response)
    })


    app.post('/inscript', (request, response) => {
        let HomeController = require('../src/controllers/RegisterController.js')
        HomeController.process(request,response)
    })


    app.get('/connexion', (request, response) => {
        let HomeController = require('../src/controllers/AuthenticationController.js')
        HomeController.connexion(request,response)
    })

    app.post('/connexion', (request, response) => {
        let HomeController = require('../src/controllers/AuthenticationController.js')
        HomeController.process(request,response)
    })

    app.get('/deconnexion', (request, response) => {
        let HomeController = require('../src/controllers/AuthenticationController.js')
        HomeController.deconnect(request,response)
    })

    app.get('/layout', (request, response) => {
        let HomeController = require('../src/controllers/DashController.js')
        HomeController.layout(request,response)
    })

    app.get('/listing', (request, response) => {
        let HomeController = require('../src/controllers/ListingController.js')
        HomeController.listing(request,response)
    })

    app.get('/delete', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.delete(request, response)
    })

    app.get('/delete/:id([0-9]+)', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.deleteUser(request, response)
    })


    app.get('/modif/:id([0-9]+)', (request, response) => {
        let HomeController = require('../src/controllers/UpdateController.js')
        HomeController.modif(request,response)
    })

    app.post('/modif/:id([0-9]+)', (request, response) => {
        let HomeController = require('../src/controllers/UpdateController.js')
        HomeController.updateUser(request,response)
    })
    
};