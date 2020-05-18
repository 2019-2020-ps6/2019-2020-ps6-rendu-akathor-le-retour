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
      name: [''],
    });
  }


  onSubmit() {
    const themeAdd = this.themeForm.getRawValue()  ;
    console.log('input ', themeAdd);
    console.log('input 2 ', this.nom);
  }
  sauvegarder() {
    if (this.mode) {
      const themeAdd = this.themeForm.getRawValue()  ;

      // const theme: Theme = {name: themeAdd} as unknown as Theme;



   //   this.quizService.addTheme(themeAdd);
    }

  }
}
