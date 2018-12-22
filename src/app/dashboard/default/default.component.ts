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
 // user: Observable<User>;

  constructor(private data: DataService, private dashboard: DashboardComponent) {
    this.user  = new User();
    this.data._isEmpty().subscribe( isEmpty => {
      if (!isEmpty) {
       this.data.getData('').subscribe( user => {
         this.user = user;
       });
      }
     });
     this.user = this.data.getDataUser();
  }

  ngOnInit() {

  }

}
