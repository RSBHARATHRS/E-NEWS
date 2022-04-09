import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  constructor(public viewCtrl: ModalController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
