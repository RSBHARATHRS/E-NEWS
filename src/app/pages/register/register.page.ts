import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signUp: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(
    public modalCtrl: ModalController, private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm()
  }

  signupForm() {
    this.signUp = this.formBuilder.group({
      first_Name: ['', [Validators.required]],
      user_Name: ['', [Validators.required, Validators.maxLength(40), this.emailValidation]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  get form() { return this.signUp.controls; }

  async dismiss() {
    return await this.modalCtrl.dismiss();
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
  register() {
    this.isFormSubmitted = true;
  }
}