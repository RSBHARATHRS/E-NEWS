import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NotificationsPage } from 'src/app/common/notifications/notifications';

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
  constructor(public nav: NavController,
    public popoverCtrl: PopoverController) { }

  ngOnInit() {
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
