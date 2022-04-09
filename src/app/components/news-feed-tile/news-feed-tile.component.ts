import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-feed-tile',
  templateUrl: './news-feed-tile.component.html',
  styleUrls: ['./news-feed-tile.component.scss'],
})
export class NewsFeedTileComponent implements OnInit {

  @Input() newsData: News;

  constructor() { }

  ngOnInit() { }

}
