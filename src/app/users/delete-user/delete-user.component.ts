import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id!: any;
  user!: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUser(this.id).subscribe(res => {
      this.user = res.data;
    });
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe(res => {
      alert('Removido com sucesso!');
      this._route.navigate(['/users']);
    })
  }

  cancel() {
    this._route.navigate(['/users']);
  }
}
