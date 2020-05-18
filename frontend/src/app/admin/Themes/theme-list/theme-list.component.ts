import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../../models/theme.model';
import {QuizService} from '../../../../services/quiz.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})

export class ThemeListComponent implements OnInit {
  public themeList: Theme[] = [];
  constructor(public quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.themes$.subscribe((themes) => this.themeList = themes);
    console.log(this.themeList);
  }

  deletetheme(theme: Theme) {
    if (confirm('tout les quizz avec ce ' + theme.name + ' seront supprimés')) {
      console.log('suppression');
    }
  }
}
