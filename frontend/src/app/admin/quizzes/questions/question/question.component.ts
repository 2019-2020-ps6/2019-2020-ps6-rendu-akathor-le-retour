import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../../../models/question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {


  @Input()
  question: Question;


  @Output()
  questionDeleted: EventEmitter<Question> = new EventEmitter<Question>();
  private suppr: boolean;

  constructor() {
  }

  ngOnInit() {
  }


  deleteConfirm() {
    this.suppr = true;
  }

  deleteQuestion(confirm: boolean) {
      if (confirm) {
        this.questionDeleted.emit(this.question);
      } else {
        this.suppr = !this.suppr;
      }
  }
}
