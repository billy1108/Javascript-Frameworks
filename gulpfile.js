var gulp = require('gulp');
var exec = require('child_process').exec;

var builder = {
	server: {
		springboot: function(){
			console.log("Starting springboot .. on port 8080");
			exec('( cd server/SpringBoot && gradle && gradle build && java -jar build/libs/gs-rest-service-0.1.0.jar )', function(err) {
			    if (err) return cb(err); // return error
			});
		},
		dropwizard: function(){
			console.log("Starting dropwizard .. on port 8080");
			exec('(cd server/DropWizard && mvn package && java -jar target/my-project-0.0.1-SNAPSHOT.jar server hello-world.yml)', function(err){
				if (err) return cb(err); // return error
			});
		}
	},
	client: {
		aurelia: function(){
			console.log("Starting aurelia .. on port 3000");
			exec('(cd aurelia.js && http-server -o -c-1 -p 3000)',function(err){
				if (err) return cb(err); // return error
			});	
		}
	}
	
}

gulp.task('default', function(cb){
	var arg = process.argv;
	if(isInArray( arg[2])){
		builder.server[arg[2].replace('--','')]();
		if(isInArray( arg[3])){
			builder.client[arg[3].replace('--', '')]();
		}else{
			console.log("Can't run the frontend service.");
		}
	}else{
		console.log("Can't run the backend service. ");
	}
});

//http-server -o -c-1 -p 3000
function isInArray(value) {
  return ["--springboot", "--dropwizard", "--aurelia"].indexOf(value) >= 0;
}