import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionsListComponent } from "./questions-list.component";
import { QuestionComponent } from "../question/question.component";
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { QuestionsService } from "src/app/services/questions.service";
import { Question } from "src/app/models/question.model";

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
            providers: [QuestionsService]
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
        component.startQuiz();
        expect(component.finished).toBeFalsy();
        expect(component.answers.length).toEqual(0);
        expect(component.remainingTime).toEqual(0);
        expect(component.show).toEqual(0);
    });

    it("should call questionsService.resetQuestions()", () => {
        spyOn(questionsService, "resetQuestions");
        component.startQuiz();
        expect(questionsService.resetQuestions).toHaveBeenCalledTimes(1);
    });

    it("should call questionsService.getquestions()", () => {
        const expectedQuestions = [new Question("1", "", [])];
        spyOn(questionsService, "getQuestions").and.returnValue(
            expectedQuestions
        );
        component.startQuiz();
        expect(questionsService.getQuestions).toHaveBeenCalledTimes(1);
        expect(component.questions).toEqual(expectedQuestions);
    });
});
