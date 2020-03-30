import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './quizzes/quiz-edit/quiz-edit.component';
import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'users', component: UserListComponent},
  { path: 'quiz-edit/:id', component: QuizEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
