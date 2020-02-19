import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/models/question.model";

@Component({
    selector: "app-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
    @Input() item: Question;
    @Input() num: Number;
    choice: number = -1;

    constructor() {}

    ngOnInit() {}

    //if user chose an answer by clicking on radio button parent component watch this.choice via @ViewChild decorator
    radioChange($event) {
        this.choice = $event.target.value === this.item.correctOption ? 1 : 0;
    }

    resetChoice() {
        this.choice = -1;
    }
}
