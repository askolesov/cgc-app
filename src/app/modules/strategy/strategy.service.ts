import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyHeader } from 'src/app/shared/models/strategy-header';
import { StrategyRun } from 'src/app/shared/models/strategy-run';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private baseUrl = 'strategy';

  constructor(private http: HttpClient) { }

  getStrategyHeaders(): Observable<StrategyHeader[]> { // TODO: Use headers
    return this.http.get(this.baseUrl) as Observable<Strategy[]>;
  }

  getStrategy(id: string): Observable<Strategy> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Strategy>;
  }

  createStrategy(strategy: Strategy): Observable<Strategy> {
    return this.http.post(`${this.baseUrl}`, strategy) as Observable<Strategy>;
  }

  updateStrategy(strategy: Strategy): Observable<Strategy> {
    return this.http.put(`${this.baseUrl}/${strategy.id}`, strategy) as Observable<Strategy>;
  }

  deleteStrategy(id: string): Observable<void> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(map(_ => undefined));
  }

  // Todo: use sandbox service to avoid name collisions
  runStrategy(strategyRun: StrategyRun): Observable<StrategyRun> {
    return this.http.post(`${this.baseUrl}/run`, strategyRun) as Observable<StrategyRun>;
  }
}
