import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionComponent } from "./question.component";
import Option, { Question } from "src/app/models/question.model";

describe("QuestionComponent", () => {
    let component: QuestionComponent;
    let fixture: ComponentFixture<QuestionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        component.item = new Question(
            "1",
            "",
            [new Option("1", "", "", true)],
            ""
        );
        component.item.options = [new Option("1", "", "", true)];
        expect(component).toBeTruthy();
    });

    it("should have an item", () => {
        component.ngOnInit();
        component.item = new Question(
            "1",
            "",
            [new Option("1", "", "", true)],
            ""
        );
        component.item.options = [new Option("1", "", "", true)];

        expect(component.item).toBeDefined;
    });

    it("should have choice -1 onInit", () => {
        component.item = new Question(
            "1",
            "",
            [new Option("1", "", "", true)],
            ""
        );
        component.item.options = [new Option("1", "", "", true)];
        component.ngOnInit();
        expect(component.choice).toEqual(-1);
    });

    it("should have choice equals -1 after resetChoice", () => {
        component.item = new Question(
            "1",
            "",
            [new Option("1", "", "", true)],
            ""
        );
        component.item.options = [new Option("1", "", "", true)];
        component.choice = 1;
        component.resetChoice();
        expect(component.choice).toEqual(-1);
    });
});
