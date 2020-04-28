import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {MatDialog } from '@angular/material';
import { DisplayComponent } from '../display/display.component';
import {AudioService} from '../../../services/audio.service';
import {SettingsService} from '../../../services/settings.service';
import {MatRadioChange } from '@angular/material';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.scss']
})

export class PlayQuestionComponent implements OnInit , OnChanges {
  settings: any;

  @Input()
  question: Question;

  @Input()
  mode: boolean;

  @Input() auto: boolean ;



  @Output()
  answer: EventEmitter<Answer> = new EventEmitter<Answer>();

  @Output()
  nextAnswer: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentAnswer: Answer = null;
  filter: any;
  fail = false;

  constructor(public dialog: MatDialog, public lecture: AudioService, public settingsService: SettingsService) {
     console.log(this.question);

    }

  ngOnInit() {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    console.log(this.question);
    this.scrollToAnswer();
    // this.read();

  }

  ngOnChanges(simple: SimpleChanges ) {
    console.log('mode ', this.mode);
    if (this.mode === false) {
      if (this.auto) {
        console.log(simple);
        this.read();
      }
    } else {
      this.read();
    }
  }

  radioChange(answer: Answer) {
    this.currentAnswer = answer;
  }

  answerSomething() {
    this.scrollToAnswer();
    if (this.currentAnswer != null) {
      console.log('emit ' + this.currentAnswer);
      this.answer.emit(this.currentAnswer);
      this.currentAnswer = null;
      this.fail = false;
    } else {
      this.fail = true;
      this.answer.emit(null);
    }

  }

  scrollToAnswer() {
    const element = document.getElementById('question');
    if (element != null) {
      element.scrollIntoView({behavior: 'smooth'});
    } else {
    }
  }
  askNextAnswer() {
    this.nextAnswer.emit(true);
  }

  open() {
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    this.dialog.open(DisplayComponent, {maxWidth: '1200px', maxHeight: '1000px',
      data: {name: this.question.label , quest: true  }, backdropClass: 'customDialog', panelClass: 'customContainerDialog', autoFocus: true
    });
    document.documentElement.style.setProperty('--textColor', this.settings.color);
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

  openAnswer(index: number) {
    this.scrollToAnswer();
    console.log(index);
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    const dialogRef = this.dialog.open(DisplayComponent, {maxWidth: '100%', maxHeight: '1000px', minWidth: '400px',
      data: {name: this.question.answers[index].value, id: index, question: this.question.label, quest: false },
      backdropClass: 'customDialog',
      panelClass: 'customContainerDialog',
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === false) {
        this.currentAnswer = null;
      } else {
        this.answerSomething();
      }
    });

    document.documentElement.style.setProperty('--textColor', this.settings.color);
  }

}
