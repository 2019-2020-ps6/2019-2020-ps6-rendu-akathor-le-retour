import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './admin/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './admin/quizzes/quiz-edit/quiz-edit.component';
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
  { path: 'home', component: HomeComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'select-theme', component: SelectThemeComponent},
  {path: 'play-quiz/:id', component: PlayQuizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
