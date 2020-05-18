import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizListComponent } from './admin/quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './admin/quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './admin/quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from '@angular/common/http';
import {QuizEditComponent} from './admin/quizzes/quiz-edit/quiz-edit.component';
import {QuestionEditComponent} from './admin/quizzes/questions/question-edit/question-edit.component';
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
import {MatProgressBarModule, MatDialogModule} from '@angular/material';
import { DisplayComponent } from './game/display/display.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatInputModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { DisplayFailComponent } from './game/display-fail/display-fail.component';
import { HomeAdminComponent } from './admin/homeadmin/home-admin.component';
import { SettingsEditComponent } from './admin/users/settings-edit/settings-edit.component';
import {ThemeListComponent} from './admin/Themes/theme-list/theme-list.component';
import {ThemeComponent} from './admin/Themes/theme/theme.component';
import {ThemeFormComponent} from './admin/Themes/theme-form/theme-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    QuizEditComponent,
    QuestionEditComponent,
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
    DisplayComponent,
    DisplayFailComponent,
    HomeAdminComponent,
    SettingsEditComponent,
    ThemeListComponent,
    ThemeComponent,
    ThemeFormComponent,
  ],
  entryComponents: [DisplayComponent, DisplayFailComponent],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
