import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyHeader } from 'src/app/shared/models/strategy-header';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})
export class StrategyListComponent implements OnInit {

  items$ = new Subject<StrategyHeader[]>();

  constructor(private strategyService: StrategyService) { }

  ngOnInit(): void {
    this.updateItems();
  }

  updateItems(): void {
    this.strategyService.getStrategyHeaders().subscribe(i => this.items$.next(i));
  }

  delete(id: string): void {
    this.strategyService.deleteStrategy(id).subscribe(_ => this.updateItems());
  }
}
