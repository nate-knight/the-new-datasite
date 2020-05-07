import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaShellComponent } from './qa-shell.component';

describe('QaShellComponent', () => {
  let component: QaShellComponent;
  let fixture: ComponentFixture<QaShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
