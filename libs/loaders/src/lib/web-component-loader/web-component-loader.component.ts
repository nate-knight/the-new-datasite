import { Component, OnInit, ElementRef,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgElement, WithProperties } from '@angular/elements';


@Component({
  selector: 'the-new-datasite-web-component-loader',
  templateUrl: './web-component-loader.component.html',
  styleUrls: ['./web-component-loader.component.scss']
})
export class WebComponentLoaderComponent implements OnInit {

  constructor(private elRef: ElementRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    // Add script if it hasn't already been added:
    const s = document.createElement('script');
    s.src = this.route.snapshot.data.scriptSrc;
    document.head.appendChild(s);
    
    // add component selector
    const selector = document.createElement(this.route.snapshot.data.selector);
    
    const params = Object.keys(this.route.snapshot.params);
    params.forEach(param => {
     selector.setAttributeNS(null, param, this.route.snapshot.params[param]);
    });

    this.elRef.nativeElement.appendChild(selector);
  }

}
