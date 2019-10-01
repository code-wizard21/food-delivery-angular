import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Homepage/header/header.component';
import { JumbotronComponent } from './Homepage/jumbotron/jumbotron.component';
import { RecommendedComponent } from './Homepage/recommended/recommended.component';
import { CardComponent } from './cards/resturants/card.component';
import { HowItWorksComponent } from './Homepage/how-it-works/how-it-works.component';
import { HowItWorksCardComponent } from './cards/how-it-works/card.component';
import { PopularResturantsComponent } from './Homepage/popular-resturants/popular-resturants.component';
import { DownloadAppComponent } from './Homepage/download-app/download-app.component';
import { TestimoniesComponent } from './Homepage/testimonies/testimonies.component';
import { TestimoniesCardComponent } from './cards/testimonies-card/testimonies-card.component';
import { HomeComponent } from './Homepage/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    RecommendedComponent,
    CardComponent,
    HowItWorksComponent,
    HowItWorksCardComponent,
    PopularResturantsComponent,
    DownloadAppComponent,
    TestimoniesComponent,
    TestimoniesCardComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
