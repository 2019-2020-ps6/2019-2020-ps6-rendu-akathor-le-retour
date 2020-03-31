import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngTalk() {
  const speech = new Speech();
  speech.speak({text: 'Test du son ?'});
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

}
