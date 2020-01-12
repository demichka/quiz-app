import { TestBed } from "@angular/core/testing";

import { QuestionsService } from "./questions.service";

describe("QuestionsService", () => {
    let service: QuestionsService;
    const arrayTenObjects = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => (service = TestBed.get(QuestionsService)));

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should validate if argument is null", () => {
        expect(() => service.createIndicesToSelect(null)).toThrow(
            "data is null"
        );
    });

    it("should validate if argument is undefined", () => {
        expect(() => service.createIndicesToSelect(undefined)).toThrow(
            "data is null"
        );
    });

    it("should validate if argument array is empty", () => {
        expect(() => service.createIndicesToSelect([])).toThrow(
            "data is empty"
        );
    });

    it("should validate if argument array length is less than 10", () => {
        expect(() => service.createIndicesToSelect([{}])).toThrow(
            "not enough questions to show"
        );
    });

    it("should validate if argument array length is less than 10 ", () => {
        expect(() =>
            service.createIndicesToSelect([{}, {}, {}, {}, {}, {}, {}, {}, {}])
        ).toThrow("not enough questions to show");
    });

    it("should validate if return is array of numbers ", () => {
        let result = service.createIndicesToSelect(arrayTenObjects);
        expect(result.filter(el => typeof el !== "number").length).toEqual(0);
    });

    it("should validate if return array of 10 el", () => {
        let result = service.createIndicesToSelect(arrayTenObjects);
        expect(result.length).toEqual(10);
    });

    it("should validate if return array of 10 el with argument more than 10", () => {
        let result = service.createIndicesToSelect([
            ...arrayTenObjects,
            arrayTenObjects
        ]);
        expect(result.length).toEqual(10);
    });
});
