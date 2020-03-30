import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from '@angular/common/http';
import {QuizEditComponent} from './quizzes/quiz-edit/quiz-edit.component';
import {AppRoutingModule} from './app.routing.module';
import {QuestionFormComponent} from './quizzes/questions/question-form/question-form.component';
import {QuestionComponent} from './quizzes/questions/question/question.component';
import {QuestionListComponent} from './quizzes/questions/question-list/question-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    QuizEditComponent,
    QuestionComponent,
    QuestionFormComponent,
    QuestionListComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
