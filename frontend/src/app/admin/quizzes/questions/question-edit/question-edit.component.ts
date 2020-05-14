import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../../../services/quiz.service';
import {Quiz} from '../../../../../models/quiz.model';
import {Question} from '../../../../../models/question.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  private quizCalled: Quiz;
  private questions: Question[] = [];
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
  ) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quizCalled = quiz);
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }


  addQuestion(question: Question): void {
    console.log(question);
    this.questions.push(question);
    this.questions$.next(this.questions);
    this.quizService.addQuestion(this.quizCalled, question);
  }


}
