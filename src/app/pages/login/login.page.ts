import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted: boolean = false
  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login()
  }

  login() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(40), this.emailValidation]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get form() {
    return this.loginForm.controls;
  }

  forgotPassword() {

  }

  emailValidation(control: AbstractControl) {
    const regex = new RegExp(/^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+\s*$/);
    if (regex.test(control.value)) {
      return null
    } else {
      return {
        emailValid: true
      }
    }
  }
  async dismiss(data?: any) {
    await this.modalCtrl.dismiss({ isLoggedIn: data });
  }

  formSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {
      return false;
    } else {
      console.log("form Submitted")
    }
    this.dismiss(true);
  }

}