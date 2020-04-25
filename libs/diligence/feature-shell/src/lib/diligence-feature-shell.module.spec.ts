import { async, TestBed } from '@angular/core/testing';
import { DiligenceFeatureShellModule } from './diligence-feature-shell.module';

describe('DiligenceFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DiligenceFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DiligenceFeatureShellModule).toBeDefined();
  });
});
