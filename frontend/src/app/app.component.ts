import { Component, ɵɵstylePropInterpolate5 } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Speech from 'speak-tts';

import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private compteur: number;

  private setting: any;

  private valide = false ;

  private speech = new Speech();

  constructor(private router: Router) {
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize'), 'border-color': localStorage.getItem('borderColor')};
  }

  onActivate(event) {
    window.scroll(0, 0);

  }

  ngTalk(x: string) {

    this.speech.setLanguage('fr-FR');
   // this.valide = true ;
    // console.log(x);
    this.compteur = 0;
    this.speech.speak({
      text: 'Hello, how are you today ?',
      onEnd : () => {console.log('tttttt'); }
  });


    // this.speech.speak({text: x ,onEnd: () => {this.end()}});
    // while (this.compteur < x.children.length) {

          // speech.speak({text: x.children[this.compteur].innerText});
    this.compteur++;
      // }


    }
    end() {
      this.valide = false;
    }


}
