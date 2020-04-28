import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
  })
  export class SettingsComponent implements OnInit {
  settings: any;
  step: number;
  sound: any;

  constructor(public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    this.step = 1;
  }

  ngOnInit() {
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
    this.settingsService.swipeSoundAuto();
  }

  nextStep() {
    this.step++;
  }
  previousStep() {
    this.step--;
  }
}
