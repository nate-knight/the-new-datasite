import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'the-new-datasite-web-component-shell',
  templateUrl: './web-component-shell.component.html',
  styleUrls: ['./web-component-shell.component.scss']
})
export class WebComponentShellComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    // search 
    const searchScript = document.createElement('script');
    searchScript.src = 'assets/main-es2015.ee0afc9d727a30a1a6eb.js';
    document.body.appendChild(searchScript);

    const searchApp = document.createElement('search-shell');
    this.elRef.nativeElement.appendChild(searchApp);
  
  }

}
