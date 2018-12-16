import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBcHU0WyjzJvpdjrPcX60i3OsN3pTIcqu0',
      authDomain: 'three-point-e045d.firebaseapp.com',
      databaseURL: 'https://three-point-e045d.firebaseio.com',
      projectId: 'three-point-e045d',
      storageBucket: 'three-point-e045d.appspot.com',
      messagingSenderId: '894895930881'
    };
  firebase.initializeApp(config);

  }
}
