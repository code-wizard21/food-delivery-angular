import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { CardComponent } from './recommended/card/card.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HowItWorksCardComponent } from './how-it-works/card/card.component';
import { PopularResturantsComponent } from './popular-resturants/popular-resturants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    RecommendedComponent,
    CardComponent,
    HowItWorksComponent,
    HowItWorksCardComponent,
    PopularResturantsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
