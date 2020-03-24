import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingsPage',
  templateUrl: './settingsPage.component.html',
  styleUrls: ['./settingsPage.component.scss']
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAdmin(){
  console.log("goToAdminTest");
  }

}