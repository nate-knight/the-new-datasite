import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsShellComponent } from './documents-shell.component';

describe('DocumentsShellComponent', () => {
  let component: DocumentsShellComponent;
  let fixture: ComponentFixture<DocumentsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
