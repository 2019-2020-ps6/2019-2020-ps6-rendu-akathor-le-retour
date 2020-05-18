import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {Quiz} from '../../../models/quiz.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})

  export class SettingsComponent implements OnInit {
  settings: any;
  step: number;
  modeConf = false;
  sound: any;
  routes: string [] = ['/settings/color', '/settings/textSize', '/settings/tts', '/user/'];
  user: User;


  @Output()
  updateDone: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public settingsService: SettingsService, private router: Router, private userService: UserService) {
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
      if (this.modeConf) {
          this.user.settings = settings;
          this.userService.updateSettings(this.user);
      }
    });
    this.step = this.getStep();
    if (this.modeConf) {
      this.user = this.settingsService.getUser();
      console.log(this.user.firstName);
    }
  }

  ngOnInit() {

  }

  getStep() {
    console.log(this.router.url);
    if (this.router.url.includes(this.routes[3])) {
      this.modeConf = true;
    }
    if (this.router.url.includes(this.routes[0])) {
      return 1;
    }
    if (this.router.url.includes(this.routes[1])) {
      return 2;
    }
    if (this.router.url.includes(this.routes[2])) {
      return 3;
    } else {
      console.log('ERROR URL');
      return -1;
    }
  }

  change(val1, val2) {
    this.settingsService.changeColor(val1, val2);
  }

  changeSize(textSize: string) {
    this.settingsService.changeSize(textSize);
  }

  swipeSound(value: boolean) {
    if (value) {
      this.sound = 1;
    } else {
      this.sound = 2;
    }
    this.settingsService.swipeSoundAuto(value);
  }

  nextStep() {
    this.step++;
    this.navigateToRoute(this.routes[this.step - 1]);
  }
  previousStep() {
    this.step--;
    this.navigateToRoute(this.routes[this.step - 1]);
  }

  /* Function to navigate */
  navigateToRoute(path: string) {
    if (this.modeConf) {
      this.router.navigate(['/administration/user/' + this.user.id.toString() + path]);
    } else {
    this.router.navigate([ path ]);
    }
  }

  getTitle() {
    if (this.step === 1) {
      return 'Choix de la couleur';
    } else if (this.step === 2) {
      return 'Choix de la taille du texte';
    } else if (this.step === 3) {
      return 'Choix de la lecture du texte au format audio';
    }
  }

  saveProfile() {
    this.router.navigate(['/administration/user/' + this.user.id.toString()]);
    this.updateDone.emit(true);
  }
}
