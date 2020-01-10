import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question.model";
import { QuestionsService } from "src/app/services/questions.service";
import { Answer } from "src/app/models/answer.model";
import { TimerService } from "src/app/services/timer.service";
import { Subscription } from "rxjs";

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
    timeOverSubscription: Subscription;
    remainingTimeSubscription: Subscription;
    remainingTime: number = 0;

    constructor(
        private questionService: QuestionsService,
        private timerService: TimerService
    ) {
        //add subscriptions to watch if time is over or timer is stopped by clicking on Next btn and remaining time is saved
        this.timeOverSubscription = this.timerService.timer$.subscribe(
            timer => {
                this.moveToNext();
            }
        );

        //when user clicks on btn Next, timer  is stopped and new questions is shown
        this.remainingTimeSubscription = this.timerService.remainingTime$.subscribe(
            time => {
                this.remainingTime = time;
                this.moveToNext();
            }
        );
    }

    ngOnInit() {
        this.questions = this.questionService.getQuestions();
    }

    //func to save user's response fwhich is passed by child component QuestionComponent via Event emmiter
    recieveAnswer($event) {
        this.userResponse = $event;
    }

    //func to create Answer obj with user's response in case if user chose answer or marked as missed
    //if the current question is last this button has value "Finish", on click the screen with result is shown

    moveToNext() {
        this.answer = new Answer(
            this.questions[this.show],
            this.userResponse ? this.userResponse.choice : false,
            this.userResponse ? false : true,
            this.remainingTime
        );
        if (this.show < this.questions.length - 1) {
            this.answers.push(this.answer);
            console.log(this.answers);
            this.show++;
            this.userResponse = null;
            this.remainingTime = 0;
        } else {
            this.userResponse = null;
            this.finished = !this.finished;
        }
    }

    hideIncorrectOptions($event) {
        let current = this.questions[this.show];
        let wrongs = current.options.filter(el => !el.isCorrect);
        for (let i = 0; i < 2; i++) {
            if (!wrongs[i].isCorrect) {
                wrongs[i].isHidden = true;
            }
        }
        let btn = $event.target;
        btn.setAttribute("disabled", "disabled");
    }
}
