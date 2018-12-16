import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../_model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  setData(uid, user: User) {
    user.uid = uid;
    firebase.database().ref('/users/' + uid).set(user);
  }

  getData(path): Observable<any> {
    firebase.database().ref('/users/' + path)
    .on('value', (data) => {
      this.subject.next(data.val());
      }
    );
    return this.subject.asObservable();
  }
}
