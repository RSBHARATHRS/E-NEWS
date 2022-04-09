import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed-tile',
  templateUrl: './news-feed-tile.component.html',
  styleUrls: ['./news-feed-tile.component.scss'],
})
export class NewsFeedTileComponent implements OnInit {

  @Input() newsData: any;

  constructor() { }

  ngOnInit() { }

}
