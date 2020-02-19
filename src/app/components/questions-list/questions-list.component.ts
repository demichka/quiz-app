import { Component, OnInit, ViewChild } from "@angular/core";
import { Question } from "src/app/models/question.model";
import { QuestionsService } from "src/app/services/questions.service";
import { Answer } from "src/app/models/answer.model";
import { TimerService } from "src/app/services/timer.service";
import { Subscription } from "rxjs";
import { QuestionComponent } from "../question/question.component";

@Component({
    selector: "app-questions-list",
    templateUrl: "./questions-list.component.html",
    styleUrls: ["./questions-list.component.scss"]
})
export class QuestionsListComponent implements OnInit {
    questions: Question[];
    answers: Answer[] = [];
    shownQuestion: number = 0;
    finished: boolean = false;
    timeOverSubscription: Subscription;
    remainingTimeSubscription: Subscription;
    remainingTime: number = 0;
    btnHideCorrectOptionsEnable: boolean = true;
    @ViewChild(QuestionComponent, { static: false })
    private activeQuestion: QuestionComponent;

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
        this.startQuiz();
    }

    resetQuiz() {
        this.finished = false;
        this.answers = [];
        this.remainingTime = 0;
        this.shownQuestion = 0;
    }

    startQuiz() {
        this.resetQuiz();
        this.questionService.getData().subscribe(data => {
            this.questions = data;
        });
    }

    //func to create Answer obj with user's response in case if user chose answer or marked as missed
    //if the current question is last this button has value "Finish", on click the screen with result is shown

    saveAnswertoArray() {
        this.answers.push(
            new Answer(
                this.questions[this.shownQuestion],
                this.activeQuestion.choice == 1
                    ? true
                    : this.activeQuestion.choice == 0
                    ? false
                    : false,
                this.activeQuestion.choice !== -1 ? false : true,
                this.remainingTime
            )
        );
        this.activeQuestion.resetChoice();
    }

    moveToNext() {
        this.saveAnswertoArray();
        if (this.shownQuestion < this.questions.length - 1) {
            this.shownQuestion++;
            this.remainingTime = 0;
        } else {
            this.finished = !this.finished;
        }
    }

    hideIncorrectOptions($event) {
        if (!this.btnHideCorrectOptionsEnable) {
            console.log("Nice attempt!");
            return;
        }
        let current = this.questions[this.shownQuestion];
        let wrongs = current.options.filter(el => !el.isCorrect);
        for (let i = 0; i < 2; i++) {
            wrongs[i].isHidden = true;
        }
        let btn = $event.target;
        this.btnHideCorrectOptionsEnable = false;
        this.setHintBtnDisabled(btn);
    }

    setHintBtnDisabled(btn) {
        btn.setAttribute("disabled", "disabled");
    }
}
