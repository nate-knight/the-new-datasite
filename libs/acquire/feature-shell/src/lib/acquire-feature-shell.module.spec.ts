import { async, TestBed } from '@angular/core/testing';
import { AcquireFeatureShellModule } from './acquire-feature-shell.module';

describe('AcquireFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AcquireFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AcquireFeatureShellModule).toBeDefined();
  });
});
