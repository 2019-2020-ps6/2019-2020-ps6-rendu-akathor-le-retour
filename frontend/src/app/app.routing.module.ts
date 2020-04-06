import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './quizzes/quiz-edit/quiz-edit.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {HomeComponent} from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectThemeComponent } from './select-theme/select-theme.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import {ReadableComponent} from './readable/readable.component';


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
