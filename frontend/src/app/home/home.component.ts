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
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

}
