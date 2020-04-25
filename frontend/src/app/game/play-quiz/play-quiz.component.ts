import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Answer, Question} from '../../../models/question.model';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})

export class PlayQuizComponent implements OnInit {
  private quizCalled: Quiz;
  private questions: Question[] = [];
  private answers: boolean[] = [];
  questionSubscription: Subscription;
  // public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  current: number;
  correctMode: boolean;
  currentProgress: number;
  setting: any;
  private automatique = true ;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private elementRef: ElementRef
  ) {
    this.quizService.quizSelected$.subscribe((quiz) => {

      this.quizCalled = quiz;
      this.questions = quiz.questions;
    });
    this.current = 0;
    this.correctMode = false;
    this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
      'font-size' : localStorage.getItem('textSize')};
    this.elementRef.nativeElement.style.setProperty('--textColor', this.setting.color);
    this.elementRef.nativeElement.style.setProperty('--backgroundColor', this.setting['background-color']);
    this.elementRef.nativeElement.style.setProperty('--size', this.setting['font-size']);
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);

  }


  answerSomething(answer: boolean) {
    console.log('user answer:', answer);
    this.answers.push(answer);
    if (this.current < this.questions.length) {
      this.current++;
      this.currentProgressUpdate();
    }
  }

  seeAnswers(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = true;
      this.currentProgressUpdate();
    }
  }

  restartQuiz(answer: boolean) {
    if (answer) {
      this.current = 0;
      this.correctMode = false;
      this.currentProgressUpdate();
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
  }

  changeauto() {
    this.automatique = !(this.automatique) ;
    console.log('know ' + this.automatique) ;
  }
}
