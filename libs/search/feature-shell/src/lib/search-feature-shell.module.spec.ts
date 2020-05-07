import { async, TestBed } from '@angular/core/testing';
import { SearchFeatureShellModule } from './search-feature-shell.module';

describe('SearchFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SearchFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SearchFeatureShellModule).toBeDefined();
  });
});
