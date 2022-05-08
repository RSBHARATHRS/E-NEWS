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

  selectedCate: any;

  // public search = {
  //   name: "Rio de Janeiro, Brazil",
  //   date: new Date().toISOString()
  // }

  news$: Subscription;
  newsArr: Array<News> = [];
  filteredNewsArr: Array<News> = [];

  category: Array<any> = [
    { id: 0, cate: "All" },
    { id: 1, cate: "Environmental" },
    { id: 2, cate: "Education" },
    { id: 3, cate: "Medical" },
    { id: 4, cate: "Celbrity" },
    { id: 5, cate: "Sports" },
    { id: 6, cate: "Economy" },
    { id: 7, cate: "Development" },
    { id: 8, cate: "Politics" },
    { id: 9, cate: "Military" },
  ]

  constructor(public nav: NavController,
    public popoverCtrl: PopoverController,
    private newsService: NewsService) { 
      this.selectedCate = this.category[0]?.cate;
     
    }

  ngOnInit() {
    this.news$ = this.newsService.getNews().subscribe(res => {
      console.log(res, "newsArr");
      this.newsArr = res?.newsFeeds;
      this.filteredNewsArr = this.newsArr?.slice();
    });
  }

  onCateChange(e: any) {
    if(e?.toLowerCase() == this.category[0]?.cate?.toLowerCase()){
      this.filteredNewsArr = this.newsArr?.slice();
    }else{
      this.filteredNewsArr = this.newsArr?.filter(ele=> {
        //console.log(ele,"ele");
        if(e?.toLowerCase() == ele?.category?.english?.toLowerCase()){
          return ele;
        }
      });
    }
    //console.log(e,"e");
    // console.log(this.newsArr?.filter(ele=> {
    //   if(e?.toLowerCase() == ele?.category?.english?.toLowerCase()){
    //     return ele;
    //   }
    // }));
    
    //return o1 && o2 ? o1.id === o2.id : o1 === o2;
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
