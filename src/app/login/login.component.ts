import { Component, OnInit } from '@angular/core';
import {User} from '../_model/user';
import {AuthService} from '../services/auth.service';
import {Route, Router} from '@angular/router';
import * as firebase from 'firebase';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router, private title: Title) {
    this.user = new User();
    this.errorMessage = '';
  }

  onLogin() {
    if (this.email || this.password) {
      if (this.user.isValide(this.email, 'email') && this.user.isValide(this.password, 'password')) {
        this.authService.signInUser(this.email, this.password).then(
          () => {
            this.router.navigate(['/dashboard/default']);
          },
          (error) => {
            this.errorMessage = 'Veuillez vérifier les données saisi';
          });
      } else {
        this.errorMessage = 'Votre email ou mot de passe, est mal reseigné';
      }
    } else {
      this.errorMessage = 'Tous les champs sont obligatoire';
    }
  }

  ngOnInit() {
    this.title.setTitle('Three Point | Connexion');
  }

}
