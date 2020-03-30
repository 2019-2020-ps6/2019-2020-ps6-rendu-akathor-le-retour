import {Quiz} from '../models/quiz.model';
import { Question } from '../models/question.model';
import {Themes} from '../models/themeComponent';

export const QUESTION_ACTOR: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      value: 'Les tuches II',
      isCorrect: false,
    },
    {
      value: 'La grande illusion',
      isCorrect: true,
    }
  ]
};
export const QUESTION_SPORT: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      value: 'Les tuches II',
      isCorrect: false,
    },
    {
      value: 'La grande illusion',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '1',
        name: 'Les Acteurs de Polytech', // What's happening if I change this value..?
        theme: Themes.Actor,
        questions: [QUESTION_ACTOR],
    },
    {
        id: '2',
        name: 'Les Sports',
        theme: Themes.Sport,
        questions: [QUESTION_SPORT],
    }
];
