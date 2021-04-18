import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { StrategyModule } from './modules/strategy/strategy.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { GameModule } from './modules/game/game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    StrategyModule,
    GameModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
