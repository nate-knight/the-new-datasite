import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {
  @Input() capabilities: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
