import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Theme} from '../../../../models/theme.model';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})

export class ThemeComponent {
  @Input() theme: Theme ;
  @Output() themedeleted: EventEmitter<Theme> = new EventEmitter<Theme>();
  public modif = false ;
  constructor() {}

  delete() {
    this.themedeleted.emit(this.theme);
  }

  modifier() {
    this.modif = !this.modif ;
  }
}
