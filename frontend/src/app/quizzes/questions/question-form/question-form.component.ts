import { Component, Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {QuizEditComponent} from '../../quiz-edit/quiz-edit.component';
import {Question} from '../../../../models/question.model';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent  {
  @Input()
  quiz: Quiz;
  private questionForm: FormGroup;


  constructor(public formBuilder: FormBuilder, private quizEdit: QuizEditComponent) {
  this.initializeQuestionForm();
  }


  private initializeQuestionForm() {
  this.questionForm = this.formBuilder.group({
    label: [''],
    answers: this.formBuilder.array([])
  });
  }


  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false
    });
  }

  addAnswer() {
       this.answers.push(this.createAnswer());
    }

  createQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.quizEdit.addQuestion(questionToCreate);
    this.initializeQuestionForm();
    }

}
