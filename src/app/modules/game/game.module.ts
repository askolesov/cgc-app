import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameEditComponent } from './pages/game-edit/game-edit.component';
import { GameRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [
    GameListComponent,
    GameEditComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
