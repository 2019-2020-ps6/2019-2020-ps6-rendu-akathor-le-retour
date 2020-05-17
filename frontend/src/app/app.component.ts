import {Component, OnInit, ɵɵstylePropInterpolate5} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Speech from 'speak-tts';

import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {left, right} from './animations';
import {transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class AppComponent {
  private compteur: number;

  private setting: any;

  private valide = false ;

  private speech = new Speech();
  private animationState: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize'), 'border-color': localStorage.getItem('borderColor')};
  }


  onActivate($event) {
    const numb = this.activatedRoute.firstChild.snapshot.data.routeIdx;
    if (numb === -1) {
      this.animationState += 1;
    } else if (!isNaN(numb)) {
      this.animationState = this.activatedRoute.firstChild.snapshot.data.routeIdx;
    }
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
