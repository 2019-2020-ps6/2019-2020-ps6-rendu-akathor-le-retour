import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
import { QuizService } from 'src/services/quiz.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor() {
    }

  ngOnInit() {
    const element = document.getElementById('title');
    element.scrollIntoView({behavior: 'smooth'});
    const accueil = document.getElementById('accueil');
    accueil.style.display = 'none';
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

}
