import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { QuestionComponent } from "./components/question/question.component";
import { QuestionsListComponent } from "./components/questions-list/questions-list.component";
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent,
                QuestionComponent,
                QuestionsListComponent,
                CountdownTimerComponent,
                StatisticsComponent
            ]
        }).compileComponents();
    }));

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'QuizApp'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("QuizApp");
    });

    it("should render title on a button tag", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const btn = fixture.debugElement.nativeElement;
        expect(btn.querySelector("button").textContent).toContain(
            "Start quiz!"
        );
    }));
});
