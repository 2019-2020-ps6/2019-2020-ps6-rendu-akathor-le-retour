import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import Speech from 'speak-tts';

import {Question, Answer} from '../models/question.model';





@Injectable({
    providedIn: 'root'
  })
  export class AudioService {
    private speech = new Speech();

      constructor() {
        this.speech.setLanguage('fr-FR');
      }


      stop() {
        this.speech.cancel();
      }

      lectureQuestion(question: Question ) {
       let text = '' + question.label + ' \n';
       question.answers.forEach((value, index) => {
          switch (index) {
            case 0 :
              text = text + 'première réponse:  ';
              break;

            case 1 :
              text = text + 'deuxième réponse: ';
              break;

            case 2 :
              text = text + 'troisième réponse: ';
              break;
            case 3 :
              text = text + 'quatrième réponse: ';
              break;
            default :
              text = text + 'réponse ' + (index + 1);

          }
          text = text + (value.value) + '\n . ';
        });
       this.speech.speak({text,
          queue: false });

      }



      lectureReponseCorrecte(question: Question) {
        let text = 'pour la question ';
        text += question.label ;

        question.answers.forEach((value, index) => {
          switch (index) {
            case 0 :
            text = text + 'la première réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + ' .';
            break ;

            case 1 :
              text = text + 'deuxième réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + ' .';
              break ;

            case 2 :
              text = text + 'troisième réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + '.';
              break ;
            case 3 :
              text = text + 'quatrième réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + '.';
              break ;
            default :
            text = text + 'réponse ' + (index + 1) + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + '.';

          }
        });
        this.speech.speak({text,
          queue: false});

      }

      enLecture(): boolean {
        return  this.speech.speaking() ;
      }

  }
