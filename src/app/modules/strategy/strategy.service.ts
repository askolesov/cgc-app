import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Strategy } from 'src/app/shared/models/strategy';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private baseUrl = 'strategy';

  constructor(private http: HttpClient) {}

  getStrategyHeaders(): Observable<Strategy[]> { // TODO: Use headers
    return this.http.get(this.baseUrl) as Observable<Strategy[]>;
  }

  // getModelInfo(vid: string, pid: string, prevHeight: string): Observable<ModelInfo> {
  //   const params = prevHeight ? new HttpParams().append('prev_height', prevHeight) : null;
  //   return this.http.get(`${this.baseUrl}/${vid}/${pid}`, ModelInfo, params);
  // }

  // goDeleteModelInfo(vid: string, pid: string) {
  //   const message = new MessageDeleteModelInfo({vid: parseInt(vid, 10), pid: parseInt(pid, 10)});
  //   this.txService.goPreview(message, '/model-info');
  // }
}
