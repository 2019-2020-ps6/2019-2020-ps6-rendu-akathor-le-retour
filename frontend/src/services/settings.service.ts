import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Quiz} from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  textColor: string;
  backgroundColor: string;
  textSize: string;
  borderColor: string;
  styleSmall: string;
  styleMedium: string;
  styleBig: string;
  settings: any;
  settings$: BehaviorSubject<any> = new BehaviorSubject(this.settings);


  constructor() {
    this.textColor = 'black'; // par défaut
    this.backgroundColor = 'white'; // par défaut
    this.borderColor = 'white';
    this.styleSmall = '25px';
    this.styleMedium = '30px';
    this.styleBig = '35px';
    this.textSize = this.styleMedium; // par défaut

    this.settings = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize'), 'border-color': localStorage.getItem('borderColor')};
    this.settings$.next(this.settings);


  }

  changeColor(val1: any, val2: any) {
    this.settings.color = val1;
    this.settings['background-color'] = val2;
    this.settings['border-color'] = val1;
    localStorage.setItem('textColor', val1);
    localStorage.setItem('borderColor', val1);
    localStorage.setItem('backgroundColor', val2);
    this.settings$.next(this.settings);
  }

  changeSize(textSize: string) {
    this.settings['font-size'] = textSize;
    localStorage.setItem('textSize', textSize);
    this.settings$.next(this.settings);

  }
}
