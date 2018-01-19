import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BannerLinksService } from './services/banner-links.service';

import { AppComponent } from './app.component';
import { BannerSetContainerComponent } from './components/banner-set-container/banner-set-container.component';
import { BannerSetComponent } from './components/banner-set/banner-set.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerSetContainerComponent,
    BannerSetComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    BannerLinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
