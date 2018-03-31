import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeometryDataService } from './services/geometry-data.service';
import { RenderSvgComponent } from './render-svg/render-svg.component';


@NgModule({
  declarations: [
    AppComponent,
    RenderSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GeometryDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
