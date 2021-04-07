import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyListComponent } from './pages/strategy-list/strategy-list.component';
import { StrategyEditComponent } from './pages/strategy-edit/strategy-edit.component';
import { StrategyRoutingModule } from './strategy-routing.module';


@NgModule({
  declarations: [
    StrategyListComponent,
    StrategyEditComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
