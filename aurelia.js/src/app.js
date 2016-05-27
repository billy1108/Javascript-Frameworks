export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
      { route: 'user',         name: 'user',    moduleId: './user',    nav: true, title:'Github User' },
      { route: 'people',         name: 'people',    moduleId: './people',    nav: true, title:'People' }
    ]);

    this.router = router;
  }
}