import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../../../services/settings.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent implements OnInit {


  timeLeft = 3;
  interval;
  settings: any;
  color: any;
  formatSubtitle = () => {
    return this.timeLeft.toString(10);
  }

  constructor(public dialogRef: MatDialogRef<DisplayTimerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
      this.startTimer();
      this.color = this.settings.color;
    });
  }
  close(b: boolean) {
    this.dialogRef.close(b);
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.close(true);
      }
    }, 1000);
  }

  ngOnInit(): void {
  }



}
