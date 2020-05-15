import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../../models/quiz.model';
import { Theme } from '../../../../models/theme.model';
import {DisplayComponent} from "../../../game/display/display.component";
import {MatDialog} from "@angular/material/dialog";
import {DisplayConfirmationComponent} from "../questions/display-confirmation/display-confirmation.component";

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
  private suppr: boolean;

  constructor(public dialog: MatDialog) {
    console.log(this.lecture);
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(this.quiz.id);
    console.log('child ', this.quiz.id);
  }

  deleteQuiz() {
    this.suppr = true;
    // this.quizDeleted.emit(this.quiz);
    // this.open();
  }

  open() {
    this.dialog.open(DisplayConfirmationComponent, {
      data: {
        quiz: this.quizDeleted,
      }});
  }

}
