import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/_model/user';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  user: User;
  constructor(private data: DataService) {
    this.user = this.data.getDataUser();
   }

  ngOnInit() {
  }

}
