import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, Directive} from '@angular/core';
import { SearchShellComponent } from '@the-new-datasite/search/feature-shell';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'the-new-datasite-angular-component-loader',
  templateUrl: './angular-component-loader.component.html',
  styleUrls: ['./angular-component-loader.component.scss']
})
export class AngularComponentLoaderComponent implements OnInit {
  
  @ViewChild(SearchShellComponent) searchShell: SearchShellComponent;
  searchTerm: string;

  
  constructor(public viewContainerRef: ViewContainerRef, private elRef: ElementRef, private route: ActivatedRoute ) { }
  

  ngOnInit(): void {
    // this.searchTerm = 'mouse';
    // const s = 
    // s.src = this.route.snapshot.data.scriptSrc;
  }

  ngAfterViewInit(): void {
    this.searchShell.searchTerm =  this.route.snapshot.params.searchTerm;
    
    // const params = Object.keys(this.route.snapshot.params);
    // params.forEach(param => {
    //  this.searchShell.searchTerm= '12'; //.setAttributeNS(null, param, this.route.snapshot.params[param]);
    // });
  }

}
