import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Router, ActivatedRoute } from '@angular/router';
import {SettingsService} from '../../../services/settings.service';
import { Theme } from 'src/models/theme.model';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {DisplayTimerComponent} from '../display-timer/display-timer.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})

export class SelectThemeComponent implements OnInit {

  public quizList: Quiz[] = [];
  public themeList: Theme[] = [];
  public themes$;
  public currentDifficultie: string;
  public asyncThemes = new ReplaySubject();
  settings: any;
  routes: string [] = ['/select-theme/easy', '/select-theme/intermediate', '/select-theme/hard',
    '/select-theme/all', '/select-theme/difficulties'];

  constructor(private quizService: QuizService, public router: Router, public settingsService: SettingsService, public dialog: MatDialog) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
    this.settingsService.quizDone();
    this.currentDifficultie = this.getDifficulty();
    this.quizService.quizzes$.subscribe((quizzes => {
      this.quizList = quizzes;
    }));

  }

  ngOnInit() {
    if (this.currentDifficultie != null && this.currentDifficultie !== 'Tout') {
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
    }
    if (this.router.url === this.routes[3]) {
      return 'Tout';
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
    this.openTimer(i);
  }

  openTimer(quizId: string) {
    window.scroll(0, 0);
    document.documentElement.style.setProperty('--backgroundColor', this.settings['background-color']);
    const dialogRef = this.dialog.open(DisplayTimerComponent, {maxWidth: '100%', maxHeight: '1000px', minWidth: '400px',
      backdropClass: 'customDialog',
      panelClass: 'customContainerDialog',
      autoFocus: true,
      data: {text: 'Début du quiz dans ...'}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/play-quiz/' + quizId]);
    });

    document.documentElement.style.setProperty('--textColor', this.settings.color);
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
    } else if (mode === 'Tout') {
      this.navigateToRoute(this.routes[3]);
    } else {
      this.navigateToRoute(this.routes[4]);
    }
    this.currentDifficultie = mode;
  }


  displayQuizzes() {
    this.switchDisplay('Tout');
  }
}
