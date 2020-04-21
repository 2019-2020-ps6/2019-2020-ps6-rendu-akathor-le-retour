import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {MatDialog } from '@angular/material';
import { Affichage } from '../affichage/affichage.component';

@Component({
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.scss']
})

export class PlayQuestionComponent implements OnInit {


  @Input()
  question: Question;

  @Input()
  mode: boolean;


  @Output()
  answer: EventEmitter<Answer> = new EventEmitter<Answer>();

  @Output()
  nextAnswer: EventEmitter<boolean> = new EventEmitter<boolean>();
  setting: any;

  constructor(public dialog :MatDialog) {
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize')};
  }

  ngOnInit() {
  }


  answerSomething(answer: Answer) {
    this.answer.emit(answer);
  }

  askNextAnswer() {
    this.nextAnswer.emit(true);
  }

  open(){
    this.dialog.open(Affichage,{
      data:{name:this.question.label}
    });
  }

}
