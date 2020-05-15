import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../../../models/question.model';
import {DisplayConfirmationComponent} from '../display-confirmation/display-confirmation.component';
import {MatDialog} from '@angular/material/dialog';


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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }


  deleteConfirm() {
    this.suppr = true;
    // this.open();
}

  deleteQuestion(confirm: boolean) {
      if (confirm) {
        this.questionDeleted.emit(this.question);
      } else {
        this.suppr = !this.suppr;
      }
  }

  open() {
    this.dialog.open(DisplayConfirmationComponent, {
      data: {
        question: this.questionDeleted,
      }
    });
  }
}
