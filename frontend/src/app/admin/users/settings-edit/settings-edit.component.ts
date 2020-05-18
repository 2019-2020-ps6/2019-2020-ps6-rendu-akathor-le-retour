import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user.model';
import {UserService} from '../../../../services/user.service';
import {SettingsService} from '../../../../services/settings.service';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.scss']
})
export class SettingsEditComponent implements OnInit {
  private userCalled: User;
  private settings: string;
  public settings$: BehaviorSubject<string> = new BehaviorSubject(this.settings);
  public changeSettings = false;
  private hasSettings = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private settingsService: SettingsService
  ) {
    this.userService.userSelected$.subscribe((user) => {
      this.userCalled = user;
      this.checkSettings();
    });
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.setSelectedUser(id);
  }

  navigateToRoute(path: string) {
    this.router.navigate([ path ]);
  }


  updateSettings(): void {

  }

  displaySettings() {
    this.changeSettings = true;
    this.settingsService.setUser(this.userCalled);
    this.navigateToRoute('/administration/user/' + this.userCalled.id + '/settings/color');
  }


  checkSettings() {
    this.hasSettings = this.userCalled.settings !== undefined;
  }

  settingsDone($event: any) {
    this.changeSettings = false;
    this.userService.updateSettings(this.userCalled);
    this.navigateToRoute('/administration/user/' + this.userCalled.id);
  }

  delete() {
    if (confirm('Confirmez-vous la suppression de cette utilisateur ?')) {
      this.userService.remove(this.userCalled);
      this.navigateToRoute('/administration/profiles/');
    }
  }
}
