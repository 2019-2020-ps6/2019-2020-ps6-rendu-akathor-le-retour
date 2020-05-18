import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  mode: boolean;

  @Output()
  user: EventEmitter<User> = new EventEmitter<User>();

  public userList: User[] = [];
  public userListFiltered: User[] = [];

  constructor(public userService: UserService) {
    this.userService.users$.subscribe((user) => {
      this.userList = user;
      this.userListFiltered = user;
    });
  }

  ngOnInit() {
  }

  applyFilter(f: EventTarget) {
    const filter = (f as HTMLInputElement).value;
    this.userListFiltered = this.userList.filter(item => {
      const lastname = item.lastName === undefined ? '' : item.lastName.toString();
      return (item.firstName.toString() + ' ' +
       lastname).toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      }
    );
  }

  deleteQuiz(user: User) {
    this.userService.deleteUser(user);
  }

  getUser(user: User) {
    this.userService.getUser(user.id);
    this.user.emit(user);
  }


}
