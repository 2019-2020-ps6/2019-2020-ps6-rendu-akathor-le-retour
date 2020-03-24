import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createQuizz',
  templateUrl: './createQuizz.component.html',
  styleUrls: ['./createQuizz.component.scss']
})
export class CreateQuizzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAdmin(){
  console.log("goToAdminTest");
  }

}