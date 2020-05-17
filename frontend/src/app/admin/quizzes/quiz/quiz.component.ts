import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../../models/quiz.model';
import { Theme } from '../../../../models/theme.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Input()
  lecture: boolean ;

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
    if (confirm('Etes vous sûr de vouloir supprimer ce quiz ?')) {
      this.quizDeleted.emit(this.quiz);
    }
  }

}
