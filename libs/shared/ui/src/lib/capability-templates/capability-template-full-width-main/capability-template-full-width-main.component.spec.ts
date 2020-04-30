import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityTemplateFullWidthMainComponent } from './capability-template-full-width-main.component';

describe('CapabilityTemplateFullWidthMainComponent', () => {
  let component: CapabilityTemplateFullWidthMainComponent;
  let fixture: ComponentFixture<CapabilityTemplateFullWidthMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityTemplateFullWidthMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityTemplateFullWidthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
