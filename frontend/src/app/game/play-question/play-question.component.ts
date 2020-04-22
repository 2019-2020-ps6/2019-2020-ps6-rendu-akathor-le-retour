import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {MatDialog } from '@angular/material';
import { DisplayComponent } from '../display/display.component';
import {root} from 'rxjs/internal-compatibility';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.scss']
})

export class PlayQuestionComponent implements OnInit {
  setting: any;

  @Input()
  question: Question;

  @Input()
  mode: boolean;

  @Output()
  answer: EventEmitter<Answer> = new EventEmitter<Answer>();

  @Output()
  nextAnswer: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(public dialog: MatDialog) {
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

  open() {
    document.documentElement.style.setProperty('--backgroundColor', this.setting['background-color']);
    this.dialog.open(DisplayComponent, {maxWidth: '1200px', maxHeight: '500px',
      data: {name: this.question.label }, backdropClass: 'customDialog', panelClass: 'customContainerDialog', autoFocus: true
    });
  }

}
