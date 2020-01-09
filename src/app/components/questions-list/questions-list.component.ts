import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question.model";
import { QuestionsService } from "src/app/services/questions.service";
import { Answer } from "src/app/models/answer.model";

@Component({
    selector: "app-questions-list",
    templateUrl: "./questions-list.component.html",
    styleUrls: ["./questions-list.component.scss"],
    providers: [QuestionsService]
})
export class QuestionsListComponent implements OnInit {
    questions: Question[];
    answers: Answer[] = [];
    show: number = 0;
    finished: boolean = false;
    answer: Answer;
    userResponse;

    constructor(private questionService: QuestionsService) {}

    ngOnInit() {
        this.questions = this.questionService.getQuestions();
    }

    //func to save user's response fwhich is passed by child component QuestionComponent via Event emmiter
    recieveAnswer($event) {
        this.userResponse = $event;
    }

    //on click button Next Answer obj created with user's response in case if user chose answer or marked as missed
    //if the current question is last this button has value "Finish", on click the screen with result is shown
    onBtnNext($event) {
        this.answer = new Answer(
            this.questions[this.show],
            this.userResponse ? this.userResponse.choice : false,
            this.userResponse ? false : true,
            10
        );
        if (this.show < this.questions.length - 1) {
            this.answers.push(this.answer);
            console.log(this.answers);
            this.show++;
            this.userResponse = null;
        } else {
            this.userResponse = null;
            this.finished = !this.finished;
        }
    }
}
