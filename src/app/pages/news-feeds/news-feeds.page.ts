import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NotificationsPage } from 'src/app/common/notifications/notifications';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.page.html',
  styleUrls: ['./news-feeds.page.scss'],
})
export class NewsFeedsPage implements OnInit {

  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  news$: Subscription;
  newsArr: Array<News> = [];

  constructor(public nav: NavController,
    public popoverCtrl: PopoverController,
    private newsService: NewsService) { }

  ngOnInit() {
    this.news$ = this.newsService.getNews().subscribe(res => {
      console.log(res, "newsArr");
      this.newsArr = res;
    });
  }

  doSearch() {
    //this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    //this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    //this.nav.push(SettingsPage);
  }

  async presentNotifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
