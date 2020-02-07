import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/models/question.model";

@Component({
    selector: "app-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
    @Input() item: Question = new Question(null, null, null, null);
    @Input() num: Number;
    loading: boolean = true;
    choice: boolean = undefined;

    constructor() {}

    ngOnInit() {
        if (this.item.id !== null) {
            this.loading = false;
        }
    }

    //if user chose an answer by clicking on radio button parent component watch this.choice via @ViewChild decorator
    radioChange($event) {
        this.choice =
            $event.target.value === this.item.correctOption ? true : false;
    }

    resetChoice() {
        this.choice = undefined;
    }
}
