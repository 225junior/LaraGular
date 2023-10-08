import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RedBorderDirective } from './Directives/red.boder.directive';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
