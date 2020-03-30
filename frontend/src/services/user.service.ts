import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { User } from '../models/user.model';
import { USER_LIST } from '../mocks/user-list.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private users: User[] = USER_LIST;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  addUser(user: User) {
    console.log('The user \"' + user.username + '\" was successfully created.');
    user.id = (this.users.length + 1).toString();
    user.creationDate = new Date();
    this.users.push(user);
    this.users$.next(this.users);
    console.log('The user \"' + user.username + '\" was successfully created.');

    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
    this.users$.next(this.users);
    console.log('The user \"' + user.username + '\" was successfully deleted.');

  }

  getUser(id: string): Observable<User> {
    return of(USER_LIST.find(user => user.id === id));
  }

}
