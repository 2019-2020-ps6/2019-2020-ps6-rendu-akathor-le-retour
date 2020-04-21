import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './admin/quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './admin/quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './admin/quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from '@angular/common/http';
import {QuizEditComponent} from './admin/quizzes/quiz-edit/quiz-edit.component';
import {AppRoutingModule} from './app.routing.module';
import {QuestionFormComponent} from './admin/quizzes/questions/question-form/question-form.component';
import {QuestionComponent} from './admin/quizzes/questions/question/question.component';
import {QuestionListComponent} from './admin/quizzes/questions/question-list/question-list.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { UserComponent } from './admin/users/user/user.component';
import { UserFormComponent } from './admin/users/user-form/user-form.component';
import { HomeComponent } from './admin/home/home.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { SettingsComponent } from './game/settings/settings.component';
import { SelectThemeComponent } from './game/select-theme/select-theme.component';
import { PlayQuizComponent } from './game/play-quiz/play-quiz.component';
import {PlayQuestionComponent} from './game/play-question/play-question.component';
import {PlayResultsComponent} from './game/play-results/play-results.component';
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
    PlayResultsComponent,
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
