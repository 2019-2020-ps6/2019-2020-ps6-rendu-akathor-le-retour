import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {
    id: string ;


  constructor(private quizService: QuizService) {

  }

  ngOnInit() {
    this.id = this.getId() ;
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

  getId() {
      return this.quizService.getRandomId() ;
  }

}
