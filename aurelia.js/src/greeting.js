import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Greeting {
  heading = 'Welcome to Greeting!';
  name = "Bill";
  greeting = {  content: `gg ${this.name}`};

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8080/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch(`greeting?name=${this.name}`)
      .then(response => response.json())
      .then(greeting => this.greeting = greeting);
  }

  submit() {
  	this.activate();
  }

}