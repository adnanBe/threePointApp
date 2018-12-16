import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: User;
  email: string;
  errorMessage: string;
  isReset: boolean;

constructor(private authService: AuthService, private router: Router, private title: Title) {
  this.user = new User();
  this.errorMessage = '';
  this.isReset = false;
}

onResetPwd() {
  if (this.email) {
    if (this.user.isValide(this.email, 'email')) {
      this.isReset = true;
      this.authService.resetPassword(this.email);
      setInterval(() => {
        this.router.navigate(['/login']);
      }, 7000);
    } else {
      this.errorMessage = 'Adresse email invalide';
    }
  } else {
    this.errorMessage = 'Veuillez saisir votre adresse email';
  }
}
  ngOnInit() {
    this.title.setTitle('Three Point | Réinitialisation de mot de passe');
  }

}
