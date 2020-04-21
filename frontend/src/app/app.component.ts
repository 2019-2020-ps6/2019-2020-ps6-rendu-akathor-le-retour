import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Speech from 'speak-tts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private compteur: number;

  private setting: any;

  constructor() {
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize'), 'border-color': localStorage.getItem('borderColor')};
  }
  ngTalk(x) {
    const speech = new Speech();
    console.log(x);
    this.compteur = 0;
    while (this.compteur < x.children.length) {
          speech.speak({text: x.children[this.compteur].innerText});
          this.compteur++;
      }
    }
}
