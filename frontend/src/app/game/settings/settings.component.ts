import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
  })
  export class SettingsComponent implements OnInit {
  textColor: string;
  backgroundColor: string;
  textSize: string;

  styleSmall: string;
  styleMedium: string;
  styleBig: string;
  setting: any;

    constructor() {
      this.textColor = 'black'; // par défaut
      this.backgroundColor = 'white'; // par défaut

      this.styleSmall = '20px';
      this.styleMedium = '25px';
      this.styleBig = '30px';
      this.textSize = this.styleMedium; // par défaut

      this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
        'font-size' : localStorage.getItem('textSize')};
    }

    ngOnInit() {
    }

  change(val1, val2) {
      this.setting.color = val1;
      this.setting['background-color'] = val2;
      localStorage.setItem('textColor', val1);
      localStorage.setItem('backgroundColor', val2);
  }

  changeSize(textSize: string) {
    this.setting['font-size'] = textSize;
    localStorage.setItem('textSize', textSize);
  }
}
