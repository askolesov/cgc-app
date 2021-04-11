import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})
export class StrategyListComponent implements OnInit {

  update$ = new BehaviorSubject<void>(null);
  items$: Observable<Strategy[]>;

  constructor(private strategyService: StrategyService) { }

  ngOnInit(): void {
    this.items$ = this.update$.pipe(
      switchMap(_ => this.strategyService.getStrategyHeaders())
    );
  }

  delete(id: string) {
    this.strategyService.deleteStrategy(id).subscribe(_ => this.update$.next());
  }
}
