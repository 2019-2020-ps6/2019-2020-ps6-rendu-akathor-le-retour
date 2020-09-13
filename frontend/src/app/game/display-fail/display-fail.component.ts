import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../../../services/settings.service';

@Component({
  selector: 'app-display-fail',
  templateUrl: './display-fail.component.html',
  styleUrls: ['./display-fail.component.scss']
})
export class DisplayFailComponent implements OnInit {

  settings: any;

  constructor(public dialogRef: MatDialogRef<DisplayFailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
    });
  }
  close(b: boolean) {
    this.dialogRef.close(b);
  }

  ngOnInit(): void {
  }



}
