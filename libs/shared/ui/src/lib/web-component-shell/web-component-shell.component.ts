import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-new-datasite-web-component-shell',
  templateUrl: './web-component-shell.component.html',
  styleUrls: ['./web-component-shell.component.scss']
})
export class WebComponentShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

     // add script tag
    // const polyfills = document.createElement('script');
    // polyfills.src = 'assets/polyfills-es2015.js';
    // document.body.appendChild(polyfills);

    // const img = document.createElement('img');
    // img.src = 'assets/logo.png';
    
    //hello app
    // const original = document.createElement('script');
    // original.src = 'assets/searchapp-es2015.js';
    // // main.src = 'assets/search-es2015.js';
    // document.body.appendChild(original);

    // search 
    const searchScript = document.createElement('script');
    searchScript.src = 'assets/search-es2015.js';
    document.body.appendChild(searchScript);

    // add web component
    // const helloApp = document.createElement('app-hello-world');
    // helloApp.setAttribute('title', 'Knight');

    const searchApp = document.createElement('search-shell');


    const webcomponentshell = document.getElementById('web-component-shell');
    // webcomponentshell.appendChild(helloApp);
    webcomponentshell.appendChild(searchApp);
    // webcomponentshell.appendChild(img);
  }

}
