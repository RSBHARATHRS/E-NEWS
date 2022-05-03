import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsViewedPageRoutingModule } from './news-viewed-routing.module';

import { NewsViewedPage } from './news-viewed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    NewsViewedPageRoutingModule
  ],
  declarations: [NewsViewedPage]
})
export class NewsViewedPageModule {}
