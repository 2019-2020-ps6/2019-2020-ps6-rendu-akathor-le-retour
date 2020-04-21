import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../../../models/question.model';
import { QuizService } from 'src/services/quiz.service';
import {Quiz} from '../../../../../models/quiz.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

  questionList: Question[];
  @Input()
  quiz: Quiz;

  constructor(private quizService: QuizService) {
  }
  ngOnInit(): void {
  }


  questionDeleted(question: Question) {
    this.quizService.deleteQuestion(this.quiz, question);
    console.log('The quiz \"' + question.label + '\" was successfully deleted.');  }
}
