var fs = require("fs");

module.exports = function() {
    
    var fileManager = {
        getConfig: function (file) {
            var filepath = __dirname + '/' + file;
            return this.readJsonFileSync(filepath);
        },
        readJsonFileSync: function(filepath, encoding){
             if (typeof (encoding) == 'undefined'){
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return JSON.parse(file);
        }
    }
    
    return fileManager;
}