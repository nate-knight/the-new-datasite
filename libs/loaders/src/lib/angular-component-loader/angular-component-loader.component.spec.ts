import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentLoaderComponent } from './angular-component-loader.component';

describe('AngularComponentLoaderComponent', () => {
  let component: AngularComponentLoaderComponent;
  let fixture: ComponentFixture<AngularComponentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
