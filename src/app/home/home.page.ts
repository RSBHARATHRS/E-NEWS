import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NotificationsPage } from '../common/notifications/notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav: NavController,
    public popoverCtrl: PopoverController) {
  }

}
