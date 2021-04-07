import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Strategy } from 'src/app/shared/models/strategy';
import { StrategyService } from '../../strategy.service';
import { pluck, share } from 'rxjs/operators';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})
export class StrategyListComponent implements OnInit {

  items$: Observable<Strategy[]>;

  constructor(private strategyService: StrategyService) { }

  ngOnInit(): void {
    this.getStrategyHeaders();
  }

  getStrategyHeaders(): void {
    this.items$ = this.strategyService.getStrategyHeaders().pipe();
  }
}
