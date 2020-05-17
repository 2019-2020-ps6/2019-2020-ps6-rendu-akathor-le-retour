import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Router, ActivatedRoute } from '@angular/router';
import {SettingsService} from '../../../services/settings.service';
import { Theme } from 'src/models/theme.model';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {

  public quizList: Quiz[] = [];
  public themeList: Theme[] = [];
  public themes$;
  public currentDifficultie;
  public asyncThemes = new ReplaySubject();
  settings: any;
  routes: string [] = ['/select-theme/easy', '/select-theme/intermediate', '/select-theme/hard', '/select-theme/difficulties'];

  constructor(private quizService: QuizService, public router: Router, public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    this.settingsService.quizDone();
    this.currentDifficultie = this.getDifficulty();

  }

  ngOnInit() {
    if (this.currentDifficultie != null) {
      this.getQuizbyDif(this.currentDifficultie);
    }

  }

  goToAdmin() {
    console.log('goToAdminTest');
  }

  getRandomId() {
    return this.quizService.getRandomId();
  }

  getDifficulty() {
    if (this.router.url === this.routes[0]) {
      return 'Facile';
    }
    if (this.router.url === this.routes[1]) {
      return 'Intermediaire';
    }
    if (this.router.url === this.routes[2]) {
      return 'Difficile';
    } else {
      return null;
    }
  }

 async  getQuizbyDif(dif: string) {
    this.quizList = [];
    this.themeList = [];
    this.quizService.quizzes$.subscribe((quiz) => {
      let i = 0;
      for (i; i < quiz.length; i++) {
        if (quiz[i].difficulte === dif) {
          let newOne = true;
          for (const t of this.themeList) {
            if (t.name === quiz[i].theme.name) {
              newOne = false;
            }
            }
          if (newOne) {
              this.themeList.push(quiz[i].theme);
              this.asyncThemes.next(this.themeList);
            }
        }
      }
    });
    this.currentDifficultie = dif;
    this.switchDisplay(this.currentDifficultie);
  }

  quizSelected(selected: string) {
    console.log('event received from child:', selected);
    this.router.navigate(['/play-quiz/' + selected]);
  }

  randomQuiz() {
    const i: string = this.getRandomId();
    this.router.navigate(['/play-quiz/' + i]);

  }


  getQuizByTheme(theme: Theme) {
    const i: string = this.quizService.getRandomQuizTheme(theme);
    this.router.navigate(['/play-quiz/' + i]);
  }

  getTitle() {
    if (this.currentDifficultie === null) {
      return 'Choisir la difficulté d\'un quiz';
    } else {
      return 'Liste des thèmes';
    }
  }

  navigateToRoute(path: string) {
    this.router.navigate([path]);
  }

  switchDisplay(mode: any) {
    if (mode === 'Facile') {
      this.navigateToRoute(this.routes[0]);
    } else if (mode === 'Intermediaire') {
      this.navigateToRoute(this.routes[1]);
    } else if (mode === 'Difficile') {
      this.navigateToRoute(this.routes[2]);
    } else {
      this.navigateToRoute(this.routes[3]);
    }
    this.currentDifficultie = mode;
  }


}
