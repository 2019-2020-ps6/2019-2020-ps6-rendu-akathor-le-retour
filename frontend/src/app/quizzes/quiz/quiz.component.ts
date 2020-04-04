import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {Themes} from '../../../models/themeComponent';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Input()
  lecture:boolean ; 

  theme: typeof Themes = Themes;


  @Output()
  quizSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
    console.log(this.lecture);
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(this.quiz.id);
    console.log('child ', this.quiz.id);
  }

  deleteQuiz() {
    this.quizDeleted.emit(this.quiz);
  }

}
