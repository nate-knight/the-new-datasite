import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFerrariTemplateComponent } from './the-ferrari-template.component';

describe('TheFerrariTemplateComponent', () => {
  let component: TheFerrariTemplateComponent;
  let fixture: ComponentFixture<TheFerrariTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFerrariTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFerrariTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
