import { async, TestBed } from '@angular/core/testing';
import { DocumentsFeatureShellModule } from './documents-feature-shell.module';

describe('DocumentsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentsFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentsFeatureShellModule).toBeDefined();
  });
});
