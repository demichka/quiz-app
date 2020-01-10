import { Question } from "./question.model";

export class Answer {
    constructor(
        public question: Question,
        public isCorrect: boolean,
        public isMissed: boolean,
        public time: number
    ) {}
}
