import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@NgModule({
  declarations: [
    
    AppComponent,
    ImageSearchComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
