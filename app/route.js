module.exports = (app) =>{

    app.get('/', (request, response) => {
        let HomeController = require('../src/controllers/HomeController.js')
        HomeController.index(request,response)
    })
};