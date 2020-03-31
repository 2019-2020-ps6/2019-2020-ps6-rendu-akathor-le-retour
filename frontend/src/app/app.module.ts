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
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectThemeComponent } from './select-theme/select-theme.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';

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
    PlayQuizComponent
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
