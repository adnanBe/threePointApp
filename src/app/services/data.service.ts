import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../_model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected subject = new Subject<any>();
  private isEmpty = new Subject<boolean>();
  protected user: User;

  constructor(private http: HttpClient) {  }

  setData(uid: any, user: User) {
    user.uid = uid;
    firebase.database().ref('/users/' + uid).set(user);
  }

  getData(uid: string): Observable<User> {
    return new Observable(observer => {
      if (uid) {
        firebase.database().ref('/users/' + uid)
        .on('value', (data) => {
          this.user = data.val();
          observer.next(this.user);
          this.isEmpty.next(false);
          observer.complete();
          }
        );
      } else {
        observer.next(this.user);
        observer.complete();
      }
    });
  }

  getDataUser(): User {
    return this.user;
  }

  _isEmpty(): Observable<boolean> {
    return this.isEmpty.asObservable();
  }

  unsubscribe(): void {
    this.subject.unsubscribe();
  }
}
