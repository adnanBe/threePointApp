import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  innerWidth: number;
  user: User;

  constructor(private data: DataService) {
    this.user = new User();

   }

  ngOnInit() {
  }

}
