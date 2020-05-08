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

    // hello script
    // const main = document.createElement('script');
    // main.src = 'assets/searchapp-es2015.js';
    // document.body.appendChild(main);

    // // hello component
    // const helloApp = document.createElement('app-hello-world');
    // helloApp.setAttribute('title', 'Knight');

    //search script
    // const searchScript = document.createElement('script');
    // searchScript.src = 'assets/search-es2015.js';
    // document.body.appendChild(searchScript);

     // search component
    //  const searchApp = document.createElement('search-shell');
    //  searchApp.setAttribute('title', 'Knight');

    // helloApp.addEventListener('display', (event) => {
    //   this.doSomething(event['detail']);
    // });

    // const content = document.getElementById('my-placeholder');
    // content.appendChild(helloApp);
    // content.appendChild(searchApp);
  }
  doSomething(e) {
    this.output = e;
  }
}
