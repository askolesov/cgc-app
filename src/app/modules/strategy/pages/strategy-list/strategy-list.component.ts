import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyService } from '../../strategy.service';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})
export class StrategyListComponent implements OnInit {

  items$: Subject<Strategy[]>;

  constructor(private strategyService: StrategyService) { }

  ngOnInit(): void {
    this.updateItems();
  }

  updateItems(): void {
    this.strategyService.getStrategyHeaders().subscribe(this.items$.next);
  }

  delete(id: string): void {
    this.strategyService.deleteStrategy(id).subscribe(this.updateItems);
  }
}
