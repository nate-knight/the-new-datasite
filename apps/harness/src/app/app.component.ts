import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-new-datasite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'harness';
  output: string;

  ngOnInit() {

    // add script tag
    // const polyfills = document.createElement('script');
    // polyfills.src = 'assets/polyfills-es2015.js';
    // document.body.appendChild(polyfills);

    // const main = document.createElement('script');
    // main.src = 'assets/main-es2015.js';
    // document.body.appendChild(main);

    // add web component
    const searchApp = document.createElement('app-hello-world');
    searchApp.setAttribute('title', 'Knight');

    searchApp.addEventListener('display', (event) => {
      this.doSomething(event['detail']);
    });

    const content = document.getElementById('my-placeholder');
    content.appendChild(searchApp);
  
  }
  doSomething(e) {
    this.output = e;
  }
}
