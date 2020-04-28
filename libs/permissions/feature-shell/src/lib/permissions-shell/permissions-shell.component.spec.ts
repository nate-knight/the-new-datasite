import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsShellComponent } from './permissions-shell.component';

describe('PermissionsShellComponent', () => {
  let component: PermissionsShellComponent;
  let fixture: ComponentFixture<PermissionsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
