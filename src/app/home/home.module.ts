import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

import { SharedModule } from './../shared/shared.module';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule {}
