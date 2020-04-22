import {Component, OnInit, Inject, ViewEncapsulation, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {style} from '@angular/animations';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})


export class DisplayComponent implements OnInit {
  private setting: any;

    ngOnInit() {

    }
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private refs: MatDialogRef<any>) {
      this.setting = {color  : localStorage.getItem('textColor'), 'background-color' : localStorage.getItem('backgroundColor'),
        'font-size' : localStorage.getItem('textSize')};
      refs.addPanelClass('customClass');
    }
}
