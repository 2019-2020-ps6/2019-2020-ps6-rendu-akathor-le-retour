import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {SettingsService} from '../../../services/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-load-user',
  templateUrl: './load-user.component.html',
  styleUrls: ['./load-user.component.scss']
})
export class LoadUserComponent {

  public userList: User[] = [];

  constructor(public userService: UserService,
              private settingsService: SettingsService,
              private router: Router) {
    this.userService.users$.subscribe((user) => this.userList = user);
  }

  launchSession(user: User) {
    if (user.settings === undefined) {
      if (confirm('Le profil de ' + user.firstName + ' n\'a pas encore de préférences. Voulez-vous les définir maintenant ?')) {
        this.settingsService.setUser(user);
        this.navigateToRoute('/administration/user/' + user.id + '/settings/color');
        return;
      }
    }
    this.settingsService.setUser(user);
    this.settingsService.updateSettings(user.settings);
    this.navigateToRoute('/select-theme/');
  }

  navigateToRoute(path: string) {
    this.router.navigate([ path ]);
  }
}
