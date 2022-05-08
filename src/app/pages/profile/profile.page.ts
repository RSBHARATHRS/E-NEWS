import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { fireConts } from 'src/app/constants/firebase';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  profileData = new Profile();
  about = "I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean."
  imgUrl:string = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
  user$:Subscription;
  
  constructor(private router: Router,
    private db: AngularFirestore,
    private navCtrl:NavController) { }
 

  ngOnInit() {
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      this.user$ = this.db.collection(fireConts.doc).doc(user?.emailId).valueChanges().subscribe((res:Profile)=>{
        console.log(res,"res");
        
         this.profileData = res;
         this.profileData.designation = res?.designation || "Student";
         this.profileData.about = res?.about || this.about;
         this.profileData.imgUrl = res?.imgUrl || this.imgUrl;
         //this.user$?.unsubscribe();
      })
    }
  }

  signOut() {
    localStorage.removeItem('user');
    //this.router.navigate(['/welcome']);
    this.navCtrl.navigateRoot(['/welcome']);
  }


  ngOnDestroy(): void {
    this.user$?.unsubscribe();
  }

}
