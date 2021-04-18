import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameEditComponent } from './pages/game-edit/game-edit.component';
import { GameListComponent } from './pages/game-list/game-list.component';


const routes: Routes = [
  { path: 'game', component: GameListComponent },
  { path: 'game/:id', component: GameEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }
