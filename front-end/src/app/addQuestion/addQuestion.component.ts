import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addQuestion',
  templateUrl: './addQuestion.component.html',
  styleUrls: ['./addQuestion.component.scss']
})
export class AddQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAdmin(){
  console.log("goToAdminTest");
  }

}