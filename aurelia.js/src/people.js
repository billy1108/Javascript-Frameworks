import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class People {
  heading = 'People!';
  users = [];
  offset = 0;

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(`https://${location.host}:8081`);
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch(`/?offset=${this.offset}`)
      .then(response => response.json())
      .then((users) => {
        this.users = this.users.concat(users);
        this.offset += 10;
      });
  }

  moreUsers() {
  	this.activate();
  }

}