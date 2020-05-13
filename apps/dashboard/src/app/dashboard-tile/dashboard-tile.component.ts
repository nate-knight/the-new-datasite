import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'the-new-datasite-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {
  @Input() a: string;
  @Input() b: string;
  // @Input() c: number;

  constructor() { }

  ngOnInit(): void {
  }

}
