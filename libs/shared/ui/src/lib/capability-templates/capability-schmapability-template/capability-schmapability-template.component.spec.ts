import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilitySchmapabilityTemplateComponent } from './capability-schmapability-template.component';

describe('CapabilitySchmapabilityTemplateComponent', () => {
  let component: CapabilitySchmapabilityTemplateComponent;
  let fixture: ComponentFixture<CapabilitySchmapabilityTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilitySchmapabilityTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilitySchmapabilityTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
