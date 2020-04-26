import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Quiz} from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /**
   * DEFAULT VALUES
   */
  textColor = 'black';
  backgroundColor = 'white';
  borderColor = 'white';
  styleSmall = '25px';
  styleMedium = '30px';
  styleBig = '35px';

  /**
   * GUI PARAMS
   */

  settings: any;
  settings$: BehaviorSubject<any> = new BehaviorSubject(this.settings);


  constructor() {
    this.settings$.next(this.settings);
    this.initLastSettings();
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

 initLastSettings() {
   this.settings = {color  : localStorage.getItem('textColor') != null ? localStorage.getItem('textColor') : this.textColor,
     'background-color' : localStorage.getItem('backgroundColor') != null ? localStorage.getItem('backgroundColor') : this.backgroundColor,
     'font-size' : localStorage.getItem('textSize') != null ? localStorage.getItem('textSize') : this.styleBig,
     'border-color': localStorage.getItem('borderColor') != null ? localStorage.getItem('borderColor') : this.borderColor};
   this.settings$.next(this.settings);
 }

}
