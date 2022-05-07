import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileData = new Profile();

  constructor(private router: Router) {
    this.profileData.about = "I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean."
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'));
      this.profileData.name = user?.name;
      //this.profileData. = user?.name;
    }
  }

  signOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/welcome']);
  }

}
