import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectThemeComponent } from './select-theme/select-theme.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import {PlayQuestionComponent} from './play-question/play-question.component';
import {PlayResultsComponent} from './play-results/play-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';


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
    UserListComponent,
    HomeComponent,
    AdministrationComponent,
    SettingsComponent,
    SelectThemeComponent,
    PlayQuizComponent,
    PlayQuestionComponent,
    PlayResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
