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
  borderColor: string;
  styleSmall: string;
  styleMedium: string;
  styleBig: string;
  setting: any;

    constructor() {
      this.textColor = 'black'; // par défaut
      this.backgroundColor = 'white'; // par défaut
      this.borderColor = this.textColor;
      this.styleSmall = '25px';
      this.styleMedium = '30px';
      this.styleBig = '35px';
      this.textSize = this.styleMedium; // par défaut

      this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
        'font-size' : localStorage.getItem('textSize'), 'border-color': localStorage.getItem('borderColor')};
    }

    ngOnInit() {
    }

  change(val1, val2) {
      this.setting.color = val1;
      this.setting['background-color'] = val2;
      this.setting['border-color'] = val1;
      localStorage.setItem('textColor', val1);
      localStorage.setItem('backgroundColor', val2);
  }

  changeSize(textSize: string) {
    this.setting['font-size'] = textSize;
    localStorage.setItem('textSize', textSize);
  }
}
