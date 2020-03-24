import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { CreateQuizzComponent } from './createQuizz/createQuizz.component';
import { AddQuestionComponent } from './addQuestion/addQuestion.component';
import { SettingsPageComponent } from './settingsPage/settingsPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    CreateQuizzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
