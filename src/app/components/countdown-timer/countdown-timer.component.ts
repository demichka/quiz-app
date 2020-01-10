import { Component, OnInit } from "@angular/core";
import { TimerService } from "src/app/services/timer.service";

@Component({
    selector: "app-countdown-timer",
    templateUrl: "./countdown-timer.component.html",
    styleUrls: ["./countdown-timer.component.scss"]
})
export class CountdownTimerComponent implements OnInit {
    constructor(private timerService: TimerService) {}
    remainingTime: number = 15;
    interval: number = 0;

    ngOnInit() {
        this.startTimer();
    }

    startTimer() {
        this.clearTimer();
        this.interval = window.setInterval(() => {
            this.remainingTime -= 1;
            if (this.remainingTime < 1) {
                this.remainingTime = 15;
                this.timerService.setTimeOver();
            }
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.interval);
    }

    stopTimer() {
        this.clearTimer();
        this.timerService.catchRamainingTime(this.remainingTime);
        this.remainingTime = 15;
        this.startTimer();
    }

    //func to add more time and to disable button
    addMoreTime($event, time: number) {
        this.remainingTime += time;
        $event.target.setAttribute("disabled", "disabled");
    }
}
