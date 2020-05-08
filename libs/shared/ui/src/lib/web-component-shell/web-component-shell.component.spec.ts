import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentShellComponent } from './web-component-shell.component';

describe('WebComponentShellComponent', () => {
  let component: WebComponentShellComponent;
  let fixture: ComponentFixture<WebComponentShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebComponentShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
