import {Component, OnInit, Inject, ViewEncapsulation, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {style} from '@angular/animations';
import {MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../../../services/settings.service';


@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})


export class DisplayComponent implements OnInit {
  private settings: any;

  ngOnInit() {

  }
  constructor(public dialogRef: MatDialogRef<DisplayComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => this.settings = settings);
  }
  close(b: boolean) {
    this.dialogRef.close(b);
  }


}
