import {Component} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
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


  private valide = false ;

  private animationState: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  onActivate() {
    const numb = this.activatedRoute.firstChild.snapshot.data.routeIdx;
    if (numb === -1) {
      this.animationState += 1;
    } else if (!isNaN(numb)) {
      this.animationState = this.activatedRoute.firstChild.snapshot.data.routeIdx;
    }
    window.scroll(0, 0);
  }

    end() {
      this.valide = false;
    }
}
