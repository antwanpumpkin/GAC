import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpServiceInterceptor } from './shared/interceptors/http-service-interceptor';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AccueilModule } from './accueil/accueil.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionModule } from './gestion/gestion.module';
import { HeaderComponent } from './user-interface/header/header.component';
import { FooterComponent } from './user-interface/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccueilModule,
    GestionModule,
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
