import { Component, OnInit, Input } from "@angular/core";
import { Answer } from "src/app/models/answer.model";
import { Statistics } from "src/app/models/statistics.model";

@Component({
    selector: "app-statistics",
    templateUrl: "./statistics.component.html",
    styleUrls: ["./statistics.component.scss"]
})
export class StatisticsComponent implements OnInit {
    @Input() answers: Answer[] = [];
    statistics: Statistics;

    ngOnInit() {
        if (this.answers.length) {
            this.statistics = new Statistics(
                this.countCorrectAnswers(this.answers),
                this.countIncorrectAnswers(this.answers),
                this.countMissedAnswers(this.answers),
                this.countAverageTime(this.answers)
            );
        }
    }

    countCorrectAnswers(data: Answer[]) {
        return data.filter(el => el.isCorrect).length;
    }

    countMissedAnswers(data: Answer[]) {
        return data.filter(el => el.isMissed).length;
    }

    countIncorrectAnswers(data: Answer[]) {
        return data.filter(el => !el.isCorrect && !el.isMissed).length;
    }

    countAverageTime(data: Answer[]) {
        var time = 0;
        data.forEach(element => {
            time += element.time;
        });

        if (time > 0) {
            return time / 10;
        } else {
            return 0;
        }
    }
}
