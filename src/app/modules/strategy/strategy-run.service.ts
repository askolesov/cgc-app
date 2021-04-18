import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrategyRun } from 'src/app/shared/models/strategy-run';

@Injectable({
  providedIn: 'root'
})
export class StrategyRunService {

  private baseUrl = 'strategy-run';

  constructor(private http: HttpClient) { }

  runStrategy(strategyRun: StrategyRun): Observable<StrategyRun> {
    return this.http.post(`${this.baseUrl}`, strategyRun) as Observable<StrategyRun>;
  }
}
