import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyRun } from 'src/app/shared/models/strategy-run';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-edit',
  templateUrl: './strategy-edit.component.html',
  styleUrls: ['./strategy-edit.component.scss']
})
export class StrategyEditComponent implements OnInit {

  strategy$: Observable<Strategy>;
  strategyRun$: Observable<StrategyRun>;

  constructor(
    private strategyService: StrategyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.strategy$ = this.route.paramMap.pipe(
      map(pm => pm.get('id')),
      tap(console.log),
      switchMap(id => id == 'new' ?
        of(new Strategy()) :
        this.strategyService.getStrategy(id))
    );
  }

  save(item: Strategy) {
    if (item.id != undefined) {
      console.log("update")
      this.strategyService.updateStrategy(item).subscribe();
    } else {
      this.strategyService.createStrategy(item).subscribe(s => this.router.navigate(['..', s.id], { relativeTo: this.route }));
    }
  }

  execute(strategy: Strategy, input: string) {
    let sr = new StrategyRun();
    sr.source = strategy.source;
    sr.inputJson = input;

    // TODO: Not correct probably...
    this.strategyRun$ = this.strategyService.runStrategy(sr);
  }
}
