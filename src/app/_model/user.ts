import { Data } from './data.model';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  uid: string;
  data: Data;

  constructor() {
    this.firstName = this.firstName || '';
    this.lastName = this.lastName || '';
    this.email = this.email || '';
    this.displayName = this.displayName || '';
    this.phoneNumber = this.phoneNumber || '';
    this.photoURL = this.photoURL || '';
    this.uid = this.uid || '';
    this.data = new Data;
  }

  isValide(value: string, type: string) {
    switch (type) {
      case 'email':
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
            break;
      case 'password' :
        const pw = /^[0-9a-zA-Z]{6,}$/;
          return pw.test(value);
            break;
    }
  }

}
