import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const fakeUrl = "../../../assets/questions.json";

@Injectable({
    providedIn: "root"
})

//this service is responsible to get array with questions and create array with objects Question
//it is used by question-list component, which gets array of Question objects
export class QuestionsService {
    private selectedQuestions: Object[] = [];

    //First, create array of indices, mix them and choose 10 values to select questions which have index equals chosen value
    createIndicesToSelect(data: Object[]): Number[] {
        if (data == null) {
            console.error("data is null");
            throw "data is null";
        }

        if (data == undefined) {
            console.error("data is undefined");
            throw "data is undefined";
        }

        if (data.length === 0) {
            throw "data is empty";
        }

        if (data.length < 10) {
            throw "not enough questions to show";
        }

        for (var indices = [], i = 0; i < data.length; ++i) indices[i] = i;
        indices = this.shuffle(indices);
        return indices.slice(0, 10);
    }

    //select 10 questions from data array
    selectQuestions(data: Object[], indices: Number[]) {
        return data.filter((element, index) => indices.indexOf(index) !== -1);
    }

    //function to mix array (with indices or questions)
    shuffle(data: Object[]): Object[] {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    }

    getData(): Observable<any> {
        return this.http
            .get<[]>(fakeUrl)
            .pipe(
                map(res => {
                    //For every element of fetched data we create Question object
                    return res.map(item => {
                        return new Question(
                            item["id"],
                            item["desc"],
                            item["options"],
                            item["correctOption"]
                        );
                    });
                })
            )
            .pipe(
                map(data => {
                    const indices = this.createIndicesToSelect(data);
                    return this.shuffle(this.selectQuestions(data, indices));
                })
            );
        //
    }

    constructor(private http: HttpClient) {}
}
