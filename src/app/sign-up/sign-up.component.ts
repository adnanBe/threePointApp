import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../_model/user';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  password: string;
  passwordVerified: string;
  errorMessage: string;
  result;

  constructor(private toast: ToastrService, private authService: AuthService,
     private router: Router, private title: Title, public dataService: DataService) {
    this.user = new User();
    this.errorMessage = '';
  }

  onSubmit() {
    if (this.user.email && this.password && this.passwordVerified && this.user.firstName && this.user.lastName)  {
      if (this.user.isValide(this.user.email, 'email')) {
        if (this.user.isValide(this.password, 'password')) {
          if (this.password === this.passwordVerified) {
            this.result = this.authService.createNewUser(this.user, this.password).then(
              (user) => {
                this.router.navigate(['/login']);
                this.toast.success('Votre compte à' +
                  ' été bien crée il vous reste valider votre email', 'Awesome !');
              },
              (error) => {
                this.errorMessage = 'Ce compte existe déja !';
              });
          } else {
            this.errorMessage = 'Les mots de passe ne correspond pas';
          }
        } else {
          this.errorMessage = 'Mot de passe non conforme, il doit contenir plus de 6 caractères';
        }
      } else {
        this.errorMessage = 'Veuillez saisir correctement votre adresse email';
      }
    } else {
      this.errorMessage = 'Tous les champs sont obligatoire';
    }
  }

  ngOnInit() {
    this.title.setTitle('Three Point | Inscription');
  }

}
