import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-viewed',
  templateUrl: './news-viewed.page.html',
  styleUrls: ['./news-viewed.page.scss'],
})
export class NewsViewedPage implements OnInit, OnDestroy {

  activatedRoute$: Subscription;
  news$: Subscription;
  newsId: any;
  newsData: News;

  constructor(private activatedRoute: ActivatedRoute,
    private newsService: NewsService) {
    this.activatedRoute$ = this.activatedRoute.queryParams.subscribe(params => {
      console.log(params, "params");
      this.newsId = params?.newsId;
    })
  }


  ngOnInit() {
    this.news$ = this.newsService.getParticularNews(this.newsId).subscribe(res => {
      this.newsData = res;
    })
  }

  ngOnDestroy(): void {
    this.activatedRoute$ ? this.activatedRoute$.unsubscribe() : null;
    this.news$ ? this.news$.unsubscribe() : null;
  }

}
