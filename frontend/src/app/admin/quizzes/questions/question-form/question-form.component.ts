import { Component, Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
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

  private valide = false ;
  private videAnsewer = false ;
  private videIndex = 0 ;
  private labelVide = false;
  private  OneCorrect = false ;


  constructor(public formBuilder: FormBuilder, private quizEdit: QuizEditComponent) {
  this.initializeQuestionForm();
  }


  private initializeQuestionForm() {
  this.questionForm = this.formBuilder.group({
    label: [''],
    answers: this.formBuilder.array([])
  });
  this.initializeCheck() ;
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
       if ( this.answers.length >= 4) {
         this.valide = true ; }
    }

  createQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    let count = 0 ;
    this.initializeCheck() ;
    this.labelVide = questionToCreate.label === '' ;
    questionToCreate.answers.forEach((value, index) => {
        if (value.value === '') {
          this.videAnsewer = true ;
          this.videIndex = index ;
        }
        if (value.isCorrect) {
          count++; }}) ;
    if ( count !== 1) {
      this.OneCorrect = true ;
    }
    if (count === 1 && !this.videAnsewer && !this.labelVide) {
      this.quizEdit.addQuestion(questionToCreate);
      this.initializeQuestionForm();
    } else {
      console.log('nombre de mauvaise réponse ') ; }
    }


  initializeCheck() {
    this.valide = false ;
    this.videAnsewer = false ;
    this.videIndex = 0 ;
    this.labelVide = false;
    this.OneCorrect = false ;
  }

  remove(index) {
    console.log(index);
    this.answers.removeAt(index);
  }
  }


