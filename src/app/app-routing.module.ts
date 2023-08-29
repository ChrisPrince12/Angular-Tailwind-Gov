import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SliderComponent } from './layout/header/slider/slider.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HistoryComponent } from './pages/history/history.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  { path: '' , component: SliderComponent,},
  { path: 'pages' , component: MainPagesComponent,
      children: [
        { path: 'about-us', component: AboutusComponent, data: { title: 'Sisi Ni Nani'}},
        { path: 'history', component: HistoryComponent, data: { title: 'Historia'}}
      ]
  },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
