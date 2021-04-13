import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyRun } from 'src/app/shared/models/strategy-run';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-edit',
  templateUrl: './strategy-edit.component.html',
  styleUrls: ['./strategy-edit.component.scss']
})
export class StrategyEditComponent implements OnInit {

  strategy$ = new Subject<Strategy>();
  strategyRun$ = new Subject<StrategyRun>();

  constructor(
    private strategyService: StrategyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(pm => pm.get('id')),
      switchMap(id => id == 'new' ? of(new Strategy()) : this.strategyService.getStrategy(id))
    ).subscribe(this.strategy$.next);
  }

  save(item: Strategy) {
    if (item.id != undefined) {
      this.strategyService.updateStrategy(item).subscribe(this.strategy$.next);
    } else {
      this.strategyService.createStrategy(item).subscribe(s => this.router.navigate(['..', s.id], { relativeTo: this.route }));
    }
  }

  execute(strategy: Strategy, input: string) {
    let sr = new StrategyRun();
    sr.source = strategy.source;
    sr.inputJson = input;

    this.strategyService.runStrategy(sr).subscribe(sr => this.strategyRun$.next(sr));
  }
}
