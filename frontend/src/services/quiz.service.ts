import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, of} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Question} from '../models/question.model';
import {Themes} from '../models/themeComponent';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QUIZ_LIST;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public quizSelected$: Subject<Quiz> = new Subject();



  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';

  private httpOptions = httpOptionsBase;
  constructor(
    private http: HttpClient) {
  this.quizzesFromApi();
  }

  addQuiz(quiz: Quiz) {
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.quizzesFromApi());
  }

  deleteQuiz(quiz: Quiz) {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.quizzesFromApi());
  }

  setSelectedQuiz(quizId: string) {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    });
  }

  quizzesFromApi() {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  getQuiz(id: string): Observable<Quiz> {
    return of(this.quizzes.find(quiz => quiz.id === id));
  }
  addQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }
  getRandomId() {
  const min = Math.ceil(0);
  const i: number = this.quizzes.length ;
  const max = Math.floor(i);
  const val: number =  Math.floor(Math.random() * (max - min)) + min;

  return  this.quizzes[val].id ;
  }
  getQuizzesByTheme(theme: Themes) {
    const quizzesByTheme: Quiz[] = [];
    this.quizzes.forEach((quiz) => {
      if ( quiz.theme === theme) {
       quizzesByTheme.push(quiz); }
    });
    return quizzesByTheme ;
  }
  getRandomQuizTheme(theme: Themes) {
    const min = Math.ceil(0);
    const quizzesByTheme: Quiz[] = this.getQuizzesByTheme(theme);
    const i: number = quizzesByTheme.length;
    const max = Math.floor(i);
    const val: number =  Math.floor(Math.random() * (max - min)) + min;

    return  quizzesByTheme[val].id ;
  }


}
