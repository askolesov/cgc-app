import { NgModule } from '@angular/core';
import { StrategyListComponent } from './pages/strategy-list/strategy-list.component';
import { StrategyEditComponent } from './pages/strategy-edit/strategy-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'strategy', component: StrategyListComponent },
  { path: 'strategy/:id', component: StrategyEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StrategyRoutingModule { }
