module.exports = (app) =>{

    app.get('/', (request, response) => {
        let HomeController = require('../src/controllers/HomeController.js')
        HomeController.index(request,response)
    })

    app.get('/inscript', (request, response) => {
        let HomeController = require('../src/controllers/RegisterController.js')
        HomeController.inscript(request,response)
    })


    
};