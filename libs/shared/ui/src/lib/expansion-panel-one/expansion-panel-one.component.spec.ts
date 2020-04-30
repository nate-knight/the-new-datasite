import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelOneComponent } from './expansion-panel-one.component';

describe('ExpansionPanelOneComponent', () => {
  let component: ExpansionPanelOneComponent;
  let fixture: ComponentFixture<ExpansionPanelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPanelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
