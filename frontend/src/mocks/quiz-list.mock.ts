import {Quiz} from '../models/quiz.model';
import {Theme} from '../models/theme.model';
import { Question } from '../models/question.model';

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

export const THEME_SPORT: Theme = {
  name: 'Sport'
};

export const THEME_CULTURE: Theme = {
  name: 'Culture'
};

export const THEME_ACTEUR: Theme = {
  name: 'Acteur'
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
        theme: THEME_ACTEUR,
        questions: [QUESTION_ACTOR],
    },
    {
        id: '2',
        name: 'Les Sports',
        theme: THEME_SPORT,
        questions: [QUESTION_SPORT],
    }
];
