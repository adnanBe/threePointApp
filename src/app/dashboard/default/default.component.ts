import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  innerWidth: number;
  user: User;
  toDay: string;
  date: Date;
 // user: Observable<User>;

  constructor(private data: DataService, private dashboard: DashboardComponent) {
    this.user  = new User();
    this.date = new Date();

     this.user = this.data.getDataUser();

     this.toDay = this.date.getDay() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();


  }

  ngOnInit() {

  }

}
