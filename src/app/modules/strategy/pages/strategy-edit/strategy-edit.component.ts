import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyRun } from 'src/app/shared/models/strategy-run';
import { StrategyRunService } from '../../strategy-run.service';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-edit',
  templateUrl: './strategy-edit.component.html',
  styleUrls: ['./strategy-edit.component.scss']
})
export class StrategyEditComponent implements OnInit {

  strategy$ = new BehaviorSubject<Strategy>(undefined);
  strategyRun$ = new BehaviorSubject<StrategyRun>(new StrategyRun());

  constructor(
    private strategyService: StrategyService,
    private strategyRunService: StrategyRunService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(pm => pm.get('id')),
      switchMap(id => id === 'new' ? of(new Strategy()) : this.strategyService.getStrategy(id))
    ).subscribe(i => this.strategy$.next(i));
  }

  save(item: Strategy): void {
    if (item.id !== undefined) {
      this.strategyService.updateStrategy(item).subscribe(i => this.strategy$.next(i));
    } else {
      this.strategyService.createStrategy(item).subscribe(s => this.router.navigate(['..', s.id], { relativeTo: this.route }));
    }
  }

  execute(strategy: Strategy, input: string): void {
    const sr = new StrategyRun();
    sr.strategy = strategy;
    sr.inputJson = input;

    this.strategyRunService.runStrategy(sr).subscribe(i => this.strategyRun$.next(i));
  }
}
