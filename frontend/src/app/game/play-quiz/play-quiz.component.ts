import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Answer, Question} from '../../../models/question.model';
import {BehaviorSubject, Subscription} from 'rxjs';
import {SettingsService} from '../../../services/settings.service';
import {DisplayFailComponent} from '../display-fail/display-fail.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})

export class PlayQuizComponent implements OnInit {
  private quizCalled: Quiz;
  private questions: Question[] = [];
  private answers: boolean[] = [];
  private save: any;
  current: number;
  correctMode: boolean;
  currentProgress: number;
  settings: any;
  private automatique = true ;
  private badAnswerMock: Answer = {value: '', isCorrect: false};
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private elementRef: ElementRef,
    public settingsService: SettingsService,
    public dialog: MatDialog) {
    this.save = this.settingsService.saveQuiz;
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quizCalled = quiz;
      this.questions = quiz.questions;
    });
    if (this.save != null) {
      this.backupProgress();
    } else {
      this.current = 0;
      this.correctMode = false;
    }
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    console.log('init');
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
    });
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    document.documentElement.style.setProperty('--textColor', this.settings['text-color']);

  }

  openFail() {
    window.scroll(0, 0);
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    const dialogRef = this.dialog.open(DisplayFailComponent, {maxWidth: '100%', maxHeight: '1000px', minWidth: '400px',
      // tslint:disable-next-line:triple-equals
      data: {quest: 'fail', lastOne: this.quizCalled.questions.length - this.answers.length - 1 == 0},
      backdropClass: 'customDialog',
      panelClass: 'customContainerDialog',
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.answerSomething(this.badAnswerMock);
      }
    });

    document.documentElement.style.setProperty('--textColor', this.settings.color);
  }


  answerSomething(answer: Answer) {
    console.log('user answer:', answer);
    if (answer != null) {
      this.answers.push(answer.isCorrect);
      if (this.current < this.questions.length) {
        this.current++;
        this.currentProgressUpdate();
      }
      this.saveProgress();
    } else {
      this.openFail();
    }
  }

  seeAnswers(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = true;
      this.currentProgressUpdate();
      this.saveProgress();
    }
  }

  restartQuiz(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = false;
      this.currentProgressUpdate();
      this.quizDone();
    }
  }

  nextAnswer() {
    if (this.current < this.quizCalled.questions.length) {
      this.current++;
      this.currentProgressUpdate();
    }
  }

  currentProgressUpdate() {
    this.currentProgress = this.current * 100 / this.questions.length;
  }

  redoQuiz() {
    this.current = 0;
    this.currentProgressUpdate();
    this.correctMode = false;
    this.answers = [];
    this.quizDone();
  }

  changeauto() {
    this.automatique = !(this.automatique) ;
  }

  saveProgress() {
    this.save = { answers : this.answers, correctMode : this.correctMode, current : this.current , currentProgress : this.currentProgress };
    this.settingsService.saveQuizProgress(this.save);
  }

  quizDone() {
    this.settingsService.quizDone();
  }

  backupProgress() {
    this.answers = this.save.answers;
    this.correctMode = this.save.correctMode;
    this.current = this.save.current;
    this.currentProgress = this.save.currentProgress;
  }
}
