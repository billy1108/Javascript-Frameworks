var fileManager = require('./file.js')();

module.exports = function() {
    
    var routes = {
        configRoutes: function (app) {
            app.get('/', function (request, response) {
                var offset = parseInt(request.param('offset'));
                var json = fileManager.getConfig('../data.json');
                var limit = offset + 10;
                response.json(json.slice(offset, limit));
            });
        }
    }
    
    return routes;
}