import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../../services/quiz.service';
import {Quiz} from '../../../../models/quiz.model';
import {Answer, Question} from '../../../../models/question.model';
import {BehaviorSubject, Subscription} from 'rxjs';
import {SettingsService} from '../../../../services/settings.service';

@Component({
  selector: 'app-play-results',
  templateUrl: './play-results.component.html',
  styleUrls: ['./play-results.component.scss']
})

export class PlayResultsComponent implements OnInit {

  @Input()
  answers: boolean[];

  @Output()
  askAnswers: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  askRedoingQuiz: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  askThemePage: EventEmitter<boolean> = new EventEmitter<boolean>();


  questionSubscription: Subscription;
  // public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  goodAnswer: number;
  private settings: any;


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService, public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    this.goodAnswer = 0;
    }

  ngOnInit(): void {
    this.answers.forEach(answer => {
      if (answer) {
        this.goodAnswer++;
      }
    });
  }

  seeAnswers() {
    this.askAnswers.emit(true);
  }

  redoQuiz() {
    this.askRedoingQuiz.emit(true);
  }

  backTheme() {
    this.askThemePage.emit(true);
  }
}
