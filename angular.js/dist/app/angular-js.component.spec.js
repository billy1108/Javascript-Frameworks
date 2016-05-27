"use strict";
var testing_1 = require('@angular/core/testing');
var angular_js_component_1 = require('../app/angular-js.component');
testing_1.beforeEachProviders(function () { return [angular_js_component_1.AngularJsAppComponent]; });
testing_1.describe('App: AngularJs', function () {
    testing_1.it('should create the app', testing_1.inject([angular_js_component_1.AngularJsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular-js works!\'', testing_1.inject([angular_js_component_1.AngularJsAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular-js works!');
    }));
});
//# sourceMappingURL=angular-js.component.spec.js.map