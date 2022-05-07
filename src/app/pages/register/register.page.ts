import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { fireConts } from "../../constants/firebase"

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  signUp: FormGroup;
  isFormSubmitted: boolean = false;
  register$:Subscription;
  constructor(
    public modalCtrl: ModalController, 
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    
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
    this.register$ = this.db.collection(fireConts.doc).doc(this.signUp.value.user_Name).valueChanges().subscribe((res:any)=>{
      console.log(res,"res");
      this.register$?.unsubscribe();
      this.signUp.controls.user_Name.setErrors({alreadyExists:false})
      if(res == undefined){
        this.db.collection(fireConts.doc).doc(this.signUp.value.user_Name).set({"name": this.signUp.value.first_Name,"pass": this.signUp.value.password }).then(()=>{
          this.isFormSubmitted = true;
          this.dismiss();
        })
      } else {
        this.signUp.controls.user_Name.setErrors({alreadyExists:true})
      }
    },err=>{
      console.log(err,"err");
    })
  
  }

  ngOnDestroy(): void {
    this.register$?.unsubscribe();
  }

}