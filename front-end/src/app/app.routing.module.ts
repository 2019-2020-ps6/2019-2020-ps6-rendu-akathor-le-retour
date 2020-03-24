import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { CreateQuizzComponent } from './createQuizz/createQuizz.component';
import { AddQuestionComponent } from './addQuestion/addQuestion.component';
import { SettingsPageComponent } from './settingsPage/settingsPage.component';


const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: LandingPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'createQuizz', component: CreateQuizzComponent},
    {path: 'addQuestion', component: AddQuestionComponent},
    {path: 'settings', component: SettingsPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}