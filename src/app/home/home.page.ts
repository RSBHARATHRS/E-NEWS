import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NotificationsPage } from '../common/notifications/notifications';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  constructor(public nav: NavController, public popoverCtrl: PopoverController,
    private weatherService: WeatherService) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    // this.storage.get('pickup').then((val) => {
    //   if (val === null) {
    //     this.search.name = "Rio de Janeiro, Brazil"
    //   } else {
    //     this.search.name = val;
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // });
    console.log(this.weatherService.getWeather('tamilnadu', 'tirunelveli').subscribe());

  }

  // go to result page
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
