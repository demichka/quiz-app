import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question.model";
import { QuestionsService } from "src/app/services/questions.service";

@Component({
    selector: "app-questions-list",
    templateUrl: "./questions-list.component.html",
    styleUrls: ["./questions-list.component.scss"],
    providers: [QuestionsService]
})
export class QuestionsListComponent implements OnInit {
    questions: Question[];
    show: number = 0;
    finished: boolean = false;
    constructor(private questionService: QuestionsService) {}

    ngOnInit() {
        this.questions = this.questionService.getQuestions();
    }

    nextQuestion() {
        if (this.show < this.questions.length - 1) {
            this.show++;
        } else {
            this.finished != this.finished;
        }
    }
}
