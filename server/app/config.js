var routes = require('./routes.js')();

module.exports = function(app, port) {
    
    var config = {
        allowOrigin: function () {
            app.all('/', function(req, res, next) {
              res.header("Access-Control-Allow-Origin", "*");
              res.header("Access-Control-Allow-Headers", "X-Requested-With");
              next();
            });
        },
        startApplication: function(){
            app.listen(port, function () {
                console.log(`Example app listening on port ${port}`);
            });
        },
        configApplication: function(){
            this.allowOrigin();
            routes.configRoutes(app);
            this.startApplication();
        }
    }
    
    return config;
}