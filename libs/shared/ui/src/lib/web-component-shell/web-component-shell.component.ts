import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'the-new-datasite-web-component-shell',
  templateUrl: './web-component-shell.component.html',
  styleUrls: ['./web-component-shell.component.scss']
})
export class WebComponentShellComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private elRef: ElementRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    // this.sub = this.route.params.subscribe(params => {
    //   // this.id = +params['id']; // (+) converts string 'id' to a number

    //   // In a real app: dispatch action to load the details here.
    //   console.log('params', params);
    //   // params.each(param => {
    //   //   console.log('param', param);
    //   // });
     
    // });
    
    // Add script if it hasn't already been added:
    const s = document.createElement('script');
    s.src = this.route.snapshot.data.scriptSrc;
    document.head.appendChild(s);

   
    
  
    // add component selector
     const selector = document.createElement(this.route.snapshot.data.selector);
     const params = Object.keys(this.route.snapshot.params);
     params.forEach(param => {
      selector.setAttribute(param, this.route.snapshot.params[param]);
      });
     this.elRef.nativeElement.appendChild(selector);
  
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
