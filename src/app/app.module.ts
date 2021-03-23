import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { PlaygroundModule } from './modules/playground/playground.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    PlaygroundModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: APP_BASE_HREF, useValue: environment.baseUrl }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
