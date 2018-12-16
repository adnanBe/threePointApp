import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { User } from '../_model/user';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { PATH } from '../_model/path';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAuth: boolean;
  innerWidth: number;
  emailVerified: boolean;
  user: User;
  paths;

  constructor(private authService: AuthService, private title: Title, private data: DataService) {
    this.paths = PATH;
    this.user = new User();
    setInterval(() => {
      this.innerWidth = screen.width;
    });
  }



  ngOnInit() {
    this.title.setTitle('Three Point | Espace personnel');
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          console.log('hi');
          this.emailVerified = user.emailVerified;
          this.data.getData(user.uid).subscribe(data => {
            this.user = data;
          });
         /*setInterval(() => {
            if (!this.user.emailVerified){
              this.authService.signOutUser();
            }
          }, 5000);*/
        } else {
          this.isAuth = false;
          console.log('holla');
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
