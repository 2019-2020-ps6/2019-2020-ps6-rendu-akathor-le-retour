import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {

  public quizList: Quiz[] = [];

  setting: any;

  constructor(private quizService: QuizService, public router: Router) {
    this.getQuizbyDif('difficile');
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

  getQuizbyDif(dif: string) {
    this.quizList = [];
    this.quizService.quizzes$.subscribe((quiz) => {
       let i = 0 ;
       for ( i ; i < quiz.length; i++) {
        if (quiz[i].difficulte === dif) {
          this.quizList.push(quiz[i]);
        }
      }
    });


  }
  quizSelected(selected: string) {
    console.log('event received from child:', selected);
    this.router.navigate(['/play-quiz/' + selected]);
  }

  randomQuiz() {
    const i: string = this.getRandomId() ;
    this.router.navigate(['/play-quiz/' + i]);

  }

}
