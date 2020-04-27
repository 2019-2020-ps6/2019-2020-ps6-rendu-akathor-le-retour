import { Component, Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizEditComponent} from '../../quiz-edit/quiz-edit.component';
import {Question} from '../../../../../models/question.model';
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
  submitted = false;
  nombreReponse = false ;
  oneAnswer = false;



  constructor(public formBuilder: FormBuilder, private quizEdit: QuizEditComponent) {
    this.initializeQuestionForm();
  }


  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([this.createAnswer()], [Validators.required])
    });
    this.submitted = false ;
    this.answers.push(this.createAnswer());
  }


  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: ['', Validators.required],
      isCorrect: false
    });
  }

  addAnswer() {
    if (this.answers.getRawValue().length === 4) {
      this.nombreReponse = true ;
      return ;
    }
    this.answers.push(this.createAnswer());
  }

  createQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.quizEdit.addQuestion(questionToCreate);
    this.initializeQuestionForm();
  }
  get f() { return this.questionForm.controls; }
   g(i) { return this.answers.controls[i]; }

   checkOneAnswer() {
    const tab = this.answers.getRawValue();
    let count = 0 ;
     // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < tab.length ; i++  ) {
      if (tab[i].isCorrect) {
        count++;
      }
    }
    if (count === 1) {
      this.oneAnswer = true;
    }
    }

  onSubmit() {
    this.submitted = true;
    this.oneAnswer = false;
    console.log('label form', this.questionForm.controls.label.errors);
    console.log('value form', this.answers.controls[0].valid);
    console.log('valid one :', this.checkOneAnswer());

    // stop here if form is invalid
    if (this.questionForm.invalid  || this.checkOneAnswer() ) {
      console.log('invalide form');
      return;
    }
    this.createQuestion();
  }

  delete(i: number) {
    console.log(i);
    this.answers.removeAt(i);
    this.nombreReponse = false ;
  }
}
