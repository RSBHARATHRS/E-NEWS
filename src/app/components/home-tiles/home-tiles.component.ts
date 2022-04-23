import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tiles',
  templateUrl: './home-tiles.component.html',
  styleUrls: ['./home-tiles.component.scss'],
})
export class HomeTilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  gotoNewsFeeds() {
    this.router.navigate(['news-feeds']);
  }
}
