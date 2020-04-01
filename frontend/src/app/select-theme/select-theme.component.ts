import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {
  setting: any;

  constructor(private quizService: QuizService) {
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize')};
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
