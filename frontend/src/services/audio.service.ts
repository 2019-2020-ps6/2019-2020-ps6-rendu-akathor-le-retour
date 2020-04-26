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
        this.speech.setRate(0.7);
        this.speech.init({
             splitSentences: false
     });

      }

      lectureReponses(x: any) {
        let compteur = 0;
        let text = '';
        while (compteur < x.children.length) {
          if (x.children[compteur].innerText > 0) {
          text += 'reponse ';
          }
          text += x.children[compteur].innerText;
          compteur++;
        }
        return text;
      }

      lectureHtml(x: any) {

        let compteur = 0;
        let text = '';
        while (compteur < x.children.length) {
          console.log(x.children[compteur].innerText);
          console.log(x.children[compteur].innerText.split('\n'));
          const tab = x.children[compteur].innerText.split('\n');

          tab.array.forEach((element) => {
            if (element > 0) {
              text += ' réponse ';
            }
            text += element + ' ';
          });

          // text+=x.children[compteur].innerText;
          compteur++;
        }
        console.log(text);
        return text;
      }

      lectureAudio(audio: any) {
        let compteur = 0 ;
        while (compteur < audio.children.length) {

          this.speech.speak({text: this.lectureHtml(audio),
            queue: false});
          compteur++;
        }
      }

      stop() {
        this.speech.cancel();
      }

      lectureQuestion(question: Question ) {
        this.speech.setRate(0.7);

        let text = '';
        text = '' + question.label + ' \n';

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
        this.speech.speak({
          text,
          queue: false
        });

      }


      lectureReponse(question: Question , index: number) {
        const value = question.answers[index].value;
        const text =  'réponse ' + (index + 1) + (value ) + ' \n';
        const bol = true ;


        this.speech.speak({text,
          queue: false });
      }

      lectureReponseCorrecte(question: Question) {
        let text = 'pour la question ';
        text += question.label ;

        question.answers.forEach((value, index) => {
          switch (index) {
            case 0 :
            text = text + 'la première réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + '.';
            break ;

            case 1 :
              text = text + 'deuxième réponse ' + (value .value) + (value.isCorrect ? ' était correcte' : 'était fausse') + '.';
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

  }
