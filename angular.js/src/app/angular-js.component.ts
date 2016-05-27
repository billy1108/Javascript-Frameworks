import { Component } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'angular-js.component.html' ,
  directives: [HeroesComponent]
})
export class AngularJsAppComponent {
  title = 'angular-js workssssss!';
}
