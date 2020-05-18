import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { User } from '../models/user.model';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {HttpClient} from '@angular/common/http';

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
  private users: User[];
  private userUrl = serverUrl + '/users';
  private httpOptions = httpOptionsBase;
  public userSelected$: Subject<User> = new Subject();
  public userSelected: User;
  constructor(
    private http: HttpClient) {
    this.usersFromApi();
  }

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  addUser(user: User) {
    user.id = (this.users.length + 1).toString();
    this.users.push(user);
    this.users$.next(this.users);
    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(() => this.usersFromApi());

    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  setSelectedUser(userId: string) {
    const urlWithId = this.userUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
      this.userSelected = user;
    });
  }
  updateSettings(user: User) {
    const userUrl = this.userUrl + '/' + user.id;
    this.http.put<User>(userUrl, user, this.httpOptions).subscribe(() => this.usersFromApi());
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
    this.users$.next(this.users);

  }

  getUser(id: string): Observable<User> {
    return of(this.users.find(user => user.id === id));
  }

  private usersFromApi() {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }

  remove(userCalled: User) {
    const urlWithId = this.userUrl + '/' + userCalled.id.toString();
    this.http.delete<User[]>(urlWithId, this.httpOptions).subscribe(() => this.usersFromApi());
  }
}
