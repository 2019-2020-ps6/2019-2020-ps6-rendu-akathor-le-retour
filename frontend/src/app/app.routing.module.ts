import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './admin/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './admin/quizzes/quiz-edit/quiz-edit.component';
import {QuestionEditComponent} from './admin/quizzes/questions/question-edit/question-edit.component';
import {UserListComponent} from './admin/users/user-list/user-list.component';
import {HomeComponent} from './admin/home/home.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { SettingsComponent } from './game/settings/settings.component';
import { SelectThemeComponent } from './game/select-theme/select-theme.component';
import { PlayQuizComponent } from './game/play-quiz/play-quiz.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'users', component: UserListComponent},
  { path: 'quiz-edit/:id', component: QuizEditComponent },
  { path: 'quiz-edit/:id/question-edit/:id', component: QuestionEditComponent },
  { path: 'home', component: HomeComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'settings', redirectTo: '/settings/color', pathMatch: 'full'},
  {path: 'settings/color', component: SettingsComponent, data: {routeIdx: 0} },
  {path: 'settings/textSize', component: SettingsComponent, data: {routeIdx: 1} },
  {path: 'settings/tts', component: SettingsComponent, data: {routeIdx: 2} },
  {path: 'select-theme', redirectTo: '/select-theme/difficulties', pathMatch: 'full'},
  {path: 'select-theme/difficulties', component: SelectThemeComponent, data: {routeIdx: 3} },
  {path: 'select-theme/easy', component: SelectThemeComponent, data: {routeIdx: 4} },
  {path: 'select-theme/intermediate', component: SelectThemeComponent, data: {routeIdx: 4} },
  {path: 'select-theme/hard', component: SelectThemeComponent, data: {routeIdx: 4} },
  {path: 'play-quiz/:id', redirectTo: '/play-quiz/:id/1', pathMatch: 'full'},
  {path: 'play-quiz/:id/:q', component: PlayQuizComponent, data: {routeIdx: -1} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
