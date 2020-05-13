import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentLoaderComponent } from './web-component-loader.component';

describe('WebComponentLoaderComponent', () => {
  let component: WebComponentLoaderComponent;
  let fixture: ComponentFixture<WebComponentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebComponentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
