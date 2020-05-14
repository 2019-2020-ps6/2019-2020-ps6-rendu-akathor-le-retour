import {Injectable} from '@angular/core';
import {Quiz} from '../models/quiz.model';
import {QUESTION_ACTOR} from '../mocks/quiz-list.mock';
import {Theme} from '../models/theme.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private questions: Question = QUESTION_ACTOR;
  public themes: Theme[] = [];
  // public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);


  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  // public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  // public questionSelected$: Subject<Question> = new Subject();
}
