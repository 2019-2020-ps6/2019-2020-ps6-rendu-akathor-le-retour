import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private reponse: Answer[] = [];
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
    private router: Router,
    private elementRef: ElementRef,
    public settingsService: SettingsService,
    public dialog: MatDialog) {
    this.save = this.settingsService.saveQuiz;
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quizCalled = quiz;
      this.questions = quiz.questions;
      if (this.route.snapshot.paramMap.get('q') !== 'result') {
      this.current = parseInt(this.route.snapshot.paramMap.get('q'), 10) - 1;
      } else {
        this.current = quiz.questions.length;
      }
      this.currentProgressUpdate(this.current);

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
    console.log(this.current);
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    document.documentElement.style.setProperty('--textColor', this.settings['text-color']);

  }

  openFail() {
    window.scroll(0, 0);
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    const dialogRef = this.dialog.open(DisplayFailComponent, {maxWidth: '100%', maxHeight: '1000px', minWidth: '400px',
      data: {quest: 'fail', lastOne: this.quizCalled.questions.length - this.answers.length - 1 === 0},
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
      this.reponse.push(answer);
      this.nextAnswer();
      this.saveProgress();
    } else {
      this.openFail();
    }
  }

  seeAnswers(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = true;
      this.currentProgressUpdate(this.current);
      this.saveProgress();
      this.navigateToRoute('/play-quiz/' + this.quizCalled.id + '/' + (this.current + 1));
    }
  }

  restartQuiz(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = false;
      this.currentProgressUpdate(this.current);
      this.quizDone();
    }
  }

  nextAnswer() {
    if (this.current < this.quizCalled.questions.length) {
      this.current ++;
      this.currentProgressUpdate(this.current);
      this.navigateToRoute('/play-quiz/' + this.quizCalled.id + '/' + (this.current + 1));
    } else {
      this.navigateToRoute('/play-quiz/' + this.quizCalled.id + '/result');
    }
  }

  currentProgressUpdate(cur: number) {
    if (!isNaN(this.questions.length) && this.questions.length > 0) {
      this.currentProgress = cur * 100 / this.questions.length;
    } else {
      this.currentProgress = 0;
    }
  }

  redoQuiz() {
    this.current = 0;
    this.currentProgressUpdate(this.current);
    this.correctMode = false;
    this.answers = [];
    this.quizDone();
    this.navigateToRoute('/play-quiz/' + this.quizCalled.id + '/' + (this.current + 1));
  }

  changeauto() {
    this.automatique = !(this.automatique) ;
  }

  saveProgress() {
    this.save = { reponse: this.reponse,
      answers : this.answers, correctMode : this.correctMode, current : this.current , currentProgress : this.currentProgress };
    this.settingsService.saveQuizProgress(this.save);
  }

    quizDone() {
    this.settingsService.quizDone();
  }

  backupProgress() {
    this.answers = this.save.answers;
    this.reponse = this.save.reponse;
    this.correctMode = this.save.correctMode;
    this.current = this.save.current;
    this.currentProgress = this.save.currentProgress;
  }

  navigateToRoute(path: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([path]));
  }
}
