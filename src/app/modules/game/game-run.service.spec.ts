import { TestBed } from '@angular/core/testing';

import { GameRunService } from './game-run.service';

describe('GameRunService', () => {
  let service: GameRunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
