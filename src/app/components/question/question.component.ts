import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/models/question.model";

@Component({
    selector: "app-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
    @Input() item: Question;
    @Input() num: Number;

    constructor() {}

    ngOnInit() {}
}
