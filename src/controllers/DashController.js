class DashController {
    layout(request, response) {
        response.render('admin/layout')
    }  
}

module.exports = new DashController();
