import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFeedsPageRoutingModule } from './news-feeds-routing.module';

import { NewsFeedsPage } from './news-feeds.page';
import { NewsFeedTileComponent } from '../../components/news-feed-tile/news-feed-tile.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsFeedsPageRoutingModule
  ],
  declarations: [NewsFeedsPage,
    NewsFeedTileComponent]
})
export class NewsFeedsPageModule { }
