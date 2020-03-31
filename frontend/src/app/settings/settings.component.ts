import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
  })
  export class SettingsComponent implements OnInit {
  mycolor: string;
  mybackgroundcolor: string;
  taille: string;

  styleSmall: string;
  styleMedium: string;
  styleBig: string;
  style: string;


    constructor() {
      this.mycolor = 'black';
      this.mybackgroundcolor = 'white';
      this.taille = 'Taille';

      this.styleSmall = '20px';
      this.styleMedium = '25px';
      this.styleBig = '30px';
      this.style = '25px';
    }

    ngOnInit() {
    }

    goToAdmin() {
    console.log('goToAdminTest');
    }

    switchStyle(style) {
      document.getElementById('mycss').setAttribute('href', style);
    }

  changeColor() {
    return {color: 'yellow', 'background-color': 'orange'};
  }

  change(val1, val2) {
    this.mycolor = val1;
    this.mybackgroundcolor = val2;
  }

  changeSize(style: string) {
    this.style = style;
  }
}
