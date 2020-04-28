import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Router, ActivatedRoute } from '@angular/router';
import {SettingsService} from '../../../services/settings.service';
import { Theme } from 'src/models/theme.model';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {

  public quizList: Quiz[] = [];
  public themeList: Theme[] = [];
  public currentDifficultie;
  settings: any;

  constructor(private quizService: QuizService, public router: Router, public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    console.log(' paramètres ' + this.settings);
    this.getQuizbyDif('difficile');
    this.settingsService.quizDone();
    this.currentDifficultie = null;
    this.quizService.themes$.subscribe((themes) => this.themeList = themes);
  }

  ngOnInit() {
  }

  goToAdmin() {
  console.log('goToAdminTest');
  }

  getRandomId() {
      return this.quizService.getRandomId() ;
  }

  getQuizbyDif(dif: string) {
    this.quizList = [];
    this.themeList = [];
    this.currentDifficultie = dif;
    this.quizService.quizzes$.subscribe((quiz) => {
       let i = 0 ;
       for ( i ; i < quiz.length; i++) {
        if (quiz[i].difficulte === dif) {
          this.quizList.push(quiz[i]);
          if ( !this.themeList.includes(quiz[i].theme)) {
            this.themeList.push(quiz[i].theme);
          }
        }
      }
       console.log(this.themeList);
    });


  }
  quizSelected(selected: string) {
    console.log('event received from child:', selected);
    this.router.navigate(['/play-quiz/' + selected]);
  }

  randomQuiz() {
    const i: string = this.getRandomId() ;
    this.router.navigate(['/play-quiz/' + i]);

  }


  getQuizByTheme(theme: Theme) {
    const i: string = this.quizService.getRandomQuizTheme(theme);
    this.router.navigate(['/play-quiz/' + i]);
  }
}
