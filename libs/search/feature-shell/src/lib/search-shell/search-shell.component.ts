import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-shell',
  templateUrl: './search-shell.component.html',
  styleUrls: ['./search-shell.component.scss']
})
export class SearchShellComponent implements OnInit {
  // searchTerm: string;
  @Input() searchTerm;

  // constructor(private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit(): void {
    // console.log('activated route', this.route.snapshot.params.searchTerm);
    // this.searchTerm = this.route.snapshot.params.searchTerm;
    
    // console.log('search shell init with routermodule');


    // const params = Object.keys(this.route.snapshot.params);
    // params.forEach(param => {
    //  selector.setAttribute(param, this.route.snapshot.params[param]);
    //  });

  }

}
