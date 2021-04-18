import { TestBed } from '@angular/core/testing';

import { StrategyRunService } from './strategy-run.service';

describe('StrategyRunService', () => {
  let service: StrategyRunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategyRunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
