import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { SliderComponent } from './layout/header/slider/slider.component';
import { BannerComponent } from './layout/header/banner/banner.component';
import { MainComponent } from './layout/homeSection/main/main.component';
import { AchievementComponent } from './layout/homeSection/achievement/achievement.component';
import { NewsComponent } from './layout/homeSection/news/news.component';
import { EventsComponent } from './layout/homeSection/events/events.component';
import { AnnouncementComponent } from './layout/homeSection/announcement/announcement.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HistoryComponent } from './pages/history/history.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SliderComponent,
    BannerComponent,
    MainComponent,
    AchievementComponent,
    NewsComponent,
    EventsComponent,
    AnnouncementComponent,
    PagenotfoundComponent,
    AboutusComponent,
    HistoryComponent,
    MainPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
