import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expansion-panel-one',
  templateUrl: './expansion-panel-one.component.html',
  styleUrls: ['./expansion-panel-one.component.scss']
})
export class ExpansionPanelOneComponent implements OnInit {
  @Input() title: string;
  @Input() items: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
