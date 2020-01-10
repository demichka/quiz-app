import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionsListComponent } from "./questions-list.component";
import { QuestionComponent } from "../question/question.component";
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { QuestionsService } from "src/app/services/questions.service";

describe("QuestionsListComponent", () => {
    let component: QuestionsListComponent;
    let fixture: ComponentFixture<QuestionsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuestionsListComponent,
                QuestionComponent,
                CountdownTimerComponent,
                StatisticsComponent
            ],
            providers: [{ provide: QuestionsService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
