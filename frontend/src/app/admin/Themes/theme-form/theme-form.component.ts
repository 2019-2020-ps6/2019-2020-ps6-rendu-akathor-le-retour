import {Component, Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {QuizService} from '../../../../services/quiz.service';
import {Theme} from '../../../../models/theme.model';


@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})

export class ThemeFormComponent {
  public themeForm: FormGroup ;
  @Input() mode: boolean;
  nom: any;
  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    this.themeForm = this.formBuilder.group({
      nameTheme: '',
    });
  }
  addTheme() {
    //       this.quizService.addTheme({name: this.quizForm.get('theme').value});
  if (this.mode) {
    this.quizService.addTheme({name: this.themeForm.get('nameTheme').value});
  }
      // this.themeForm.getRawValue() as Theme;
   /* if (this.mode) {
      this.quizService.addTheme(themeadd);
    } else {
      console.log('modif', themeadd);
    }
    //console.log('theme add', themeadd);*/
  }
}
