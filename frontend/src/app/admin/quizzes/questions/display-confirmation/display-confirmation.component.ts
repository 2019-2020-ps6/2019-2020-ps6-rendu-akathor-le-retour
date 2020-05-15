import {Component, OnInit, Inject, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {style} from '@angular/animations';
import {MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../../../../../services/settings.service';
import {Question} from '../../../../../models/question.model';
import {QuizService} from "../../../../../services/quiz.service";
import {Quiz} from "../../../../../models/quiz.model";


@Component({
    selector: 'app-display',
    templateUrl: './display-confirmation.component.html',
    styleUrls: ['./display-confirmation.component.scss']
})


export class DisplayConfirmationComponent implements OnInit {

  @Input()
  question: Question;



  ngOnInit() {

  }
  constructor(public dialogRef: MatDialogRef<DisplayConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private quizService: QuizService) {
  }

  close(b: boolean, quiz: Quiz) {
    if (b) {
      this.quizService.deleteQuiz(quiz);
    } else {
      console.log(quiz);
      // console.log(question);
    }
    this.dialogRef.close();
  }

}
