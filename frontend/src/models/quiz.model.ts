import { Question } from './question.model';
import {Themes} from './themeComponent';

export interface Quiz {
    id: string;
    name: string;
    theme: Themes;
    questions: Question[];
    creationDate?: Date;
}





