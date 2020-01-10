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
    @Output() sendAnswerEvent = new EventEmitter<Object>();

    constructor() {}

    ngOnInit() {}

    //if user chose an answer by clicking on radio button QuestionComponent send this result with user's choice to its parent component via event emitter
    radioChange($event) {
        this.sendAnswerEvent.emit({
            choice: $event.target.value === "true" ? true : false
        });
    }
}
