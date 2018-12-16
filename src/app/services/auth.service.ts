import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../_model/user';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private data: DataService) { }

  createNewUser(user: User, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, password).then(
          (data) => {
            resolve();
            this.data.setData(data.user.uid, user);
            this.sendEmailValidator();
            firebase.auth().signOut();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user) => {
            resolve();
            console.log(user);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  resetPassword(email: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(
          () => {
            resolve();
            console.log('email envoyé');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  sendEmailValidator() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(
      () => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
    }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
