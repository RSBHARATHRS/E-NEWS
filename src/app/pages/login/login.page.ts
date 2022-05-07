import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { fireConts } from 'src/app/constants/firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted: boolean = false
  constructor(public modalCtrl: ModalController, 
    private formBuilder: FormBuilder,
    private db: AngularFirestore) {
  
   }

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
    this.db.collection(fireConts.doc).doc(this.loginForm.value.userName).valueChanges().subscribe((res:any)=>{
      if(res == undefined){
        this.loginForm.controls.userName.setErrors({notExists:true})
        console.log("User doesn't exist");
      } else if(res && res?.pass == this.loginForm.value.password){
        this.isFormSubmitted = true;
        localStorage.setItem("user",JSON.stringify(res))
        this.dismiss(true);
      }else{
        console.log("Incorrect Password");
      }
    },err=>{
      console.log(err,"err");
    })
  }

}