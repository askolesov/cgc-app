import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyListComponent } from './pages/strategy-list/strategy-list.component';
import { StrategyEditComponent } from './pages/strategy-edit/strategy-edit.component';
import { StrategyRoutingModule } from './strategy-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StrategyListComponent,
    StrategyEditComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    FormsModule
  ]
})
export class StrategyModule { }
