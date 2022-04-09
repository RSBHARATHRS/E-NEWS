import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  constructor(
    public modalCtrl: ModalController,
  ) {
    this.loginForm;
  }

  ngOnInit() {
  }

  login() {

  }

  forgotPassword() {

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
