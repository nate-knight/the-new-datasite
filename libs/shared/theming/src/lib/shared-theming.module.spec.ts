import { async, TestBed } from '@angular/core/testing';
import { SharedThemingModule } from './shared-theming.module';

describe('SharedThemingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedThemingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedThemingModule).toBeDefined();
  });
});
