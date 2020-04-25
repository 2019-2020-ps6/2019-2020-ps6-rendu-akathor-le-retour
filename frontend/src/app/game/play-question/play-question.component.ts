import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Output, ViewEncapsulation, ɵLifecycleHooksFeature , OnChanges, SimpleChanges} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {MatDialog } from '@angular/material';
import { DisplayComponent } from '../display/display.component';
import {AudioSevice} from '../../../services/audio.service';




@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.scss']
})

export class PlayQuestionComponent implements OnInit , OnChanges {

  @Input()
  question: Question;

  @Input()
  mode: boolean;

  @Input() auto: boolean ;



  @Output()
  answer: EventEmitter<Answer> = new EventEmitter<Answer>();

  @Output()
  nextAnswer: EventEmitter<boolean> = new EventEmitter<boolean>();



  constructor(public dialog: MatDialog, public lecture: AudioSevice) {
    console.log(this.question);

    }

  ngOnInit() {
    console.log(this.question);
   // this.read();

  }

  ngOnChanges(simple: SimpleChanges ) {
    console.log('mode ', this.mode);
    if (this.mode === false) {
      this.stop();
      if (this.auto) {
        console.log(simple);
        this.read();
      }
    } else {
      this.read();

    }

  }



  answerSomething(answer: Answer) {
    this.answer.emit(answer);

  }

  askNextAnswer() {
    this.nextAnswer.emit(true);
  }

  open() {
    this.dialog.open(DisplayComponent, {maxWidth: '1200px', maxHeight: '500px',
      data: {name: this.question.label }, backdropClass: 'customDialog', panelClass: 'customContainerDialog', autoFocus: true
    });
  }

  read() {
    console.log('read ');
    if (this.mode === false) {
    this.lecture.lectureQuestion(this.question);
    } else {
      this.lecture.lectureReponseCorrecte(this.question);

    }

  }

  stop() {
    this.lecture.stop();
  }

  readCorrection() {
    console.log('lecture reponses ');
    this.lecture.lectureReponseCorrecte(this.question);
  }

}
