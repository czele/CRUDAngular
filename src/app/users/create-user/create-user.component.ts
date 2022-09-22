import { UserService } from './../user.service';
import { RequestCreate, ResponseCreate } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response!: ResponseCreate

  constructor(private userService: UserService) { }

  ngOnInit() { }

    save() {
      this.userService.createUser(this.request)
      .subscribe(res => {this.response = res;})
    }


}
