import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedsComponent } from './news-feeds.component'
import { NewsFeedTileComponent } from '../../components/news-feed-tile/news-feed-tile.component'

@NgModule({
  declarations: [
    NewsFeedsComponent,
    NewsFeedTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsFeedsModule { }
