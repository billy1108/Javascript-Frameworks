import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularJsAppComponent } from '../app/angular-js.component';

beforeEachProviders(() => [AngularJsAppComponent]);

describe('App: AngularJs', () => {
  it('should create the app',
      inject([AngularJsAppComponent], (app: AngularJsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-js works!\'',
      inject([AngularJsAppComponent], (app: AngularJsAppComponent) => {
    expect(app.title).toEqual('angular-js works!');
  }));
});
