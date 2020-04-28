import { async, TestBed } from '@angular/core/testing';
import { PermissionsFeatureShellModule } from './permissions-feature-shell.module';

describe('PermissionsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PermissionsFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PermissionsFeatureShellModule).toBeDefined();
  });
});
