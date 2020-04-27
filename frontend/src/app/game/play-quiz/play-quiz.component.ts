import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Answer, Question} from '../../../models/question.model';
import {BehaviorSubject, Subscription} from 'rxjs';
import {SettingsService} from '../../../services/settings.service';

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

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private elementRef: ElementRef,
    public settingsService: SettingsService) {

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


  answerSomething(answer: boolean) {
    console.log('user answer:', answer);
    this.answers.push(answer);
    if (this.current < this.questions.length) {
      this.current++;
      this.currentProgressUpdate();
    }
    this.saveProgress();
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
