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
        expect(component).toBeTruthy();
    });

    it("should have an item", () => {
        const item = new Question("1", "", [new Option("1", "", "", true)], "");
        component.item = item;
        component.ngOnInit();
        expect(component.loading).toBeFalsy;
    });

    it("should be loading status if no item", () => {
        component.ngOnInit();
        expect(component.loading).toBeTruthy;
    });

    it("should have choice undefinded onInit", () => {
        component.ngOnInit();
        expect(component.choice).toBeUndefined;
    });

    it("should have choice undefined after resetChoice", () => {
        const item = new Question("1", "", [new Option("1", "", "", true)], "");
        component.item = item;
        component.choice = true;
        component.resetChoice();
        expect(component.choice).toBeUndefined;
    });
});
