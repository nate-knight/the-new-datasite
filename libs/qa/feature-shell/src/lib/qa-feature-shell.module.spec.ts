import { async, TestBed } from '@angular/core/testing';
import { QaFeatureShellModule } from './qa-feature-shell.module';

describe('QaFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QaFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QaFeatureShellModule).toBeDefined();
  });
});
