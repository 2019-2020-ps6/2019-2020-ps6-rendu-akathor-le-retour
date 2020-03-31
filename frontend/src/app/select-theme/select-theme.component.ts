import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import {Quiz} from '../../models/quiz.model';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {


  constructor(private quizService: QuizService) {

  }

  ngOnInit() {
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

  getRandomId() {
      return this.quizService.getRandomId() ;
  }

}
