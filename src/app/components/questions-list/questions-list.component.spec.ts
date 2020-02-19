import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionsListComponent } from "./questions-list.component";
import { QuestionComponent } from "../question/question.component";
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { QuestionsService } from "src/app/services/questions.service";
import Option, { Question } from "src/app/models/question.model";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";

import { HttpClientModule } from "@angular/common/http";

describe("QuestionsListComponent", () => {
    let component: QuestionsListComponent;
    let fixture: ComponentFixture<QuestionsListComponent>;

    let questionsService: QuestionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuestionsListComponent,
                QuestionComponent,
                CountdownTimerComponent,
                StatisticsComponent
            ],
            providers: [QuestionsService],
            imports: [HttpClientTestingModule, HttpClientModule]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionsListComponent);
        component = fixture.componentInstance;
        questionsService = TestBed.get(QuestionsService);
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call startQuiz 1 time on ngOnInit", () => {
        spyOn(component, "startQuiz");
        component.ngOnInit();
        expect(component.startQuiz).toHaveBeenCalledTimes(1);
    });

    it("should reset state on startQuiz", () => {
        component.resetQuiz();
        expect(component.finished).toBeFalsy();
        expect(component.answers.length).toEqual(0);
        expect(component.remainingTime).toEqual(0);
        expect(component.shownQuestion).toEqual(0);
    });
});
