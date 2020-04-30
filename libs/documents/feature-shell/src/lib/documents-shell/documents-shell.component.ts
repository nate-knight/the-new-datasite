import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-new-datasite-documents-shell',
  templateUrl: './documents-shell.component.html',
  styleUrls: ['./documents-shell.component.scss']
})
export class DocumentsShellComponent implements OnInit {
  shortcutItems = ['Item 1', 'Item 2', 'Item 3'];
  sandboxItems = ['Item 1', 'Item 2', 'Item 3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
