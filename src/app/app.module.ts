import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeometryDataService } from './services/geometry-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GeometryDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
