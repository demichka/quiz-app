import { Component, OnInit, OnDestroy } from "@angular/core";
import { TimerService } from "src/app/services/timer.service";

@Component({
    selector: "app-countdown-timer",
    templateUrl: "./countdown-timer.component.html",
    styleUrls: ["./countdown-timer.component.scss"]
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    constructor(private timerService: TimerService) {}
    remainingTime: number = 15;
    interval: number = 0;
    btnAddMoreTimeEnable: boolean = true;

    ngOnInit() {
        this.startTimer();
    }

    ngOnDestroy() {
        this.clearTimer();
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
        this.timerService.catchRamainingTime(15 - this.remainingTime);
        this.remainingTime = 15;
        this.startTimer();
    }

    //func to add more time and to disable button
    addMoreTime($event, time: number) {
        if (!this.btnAddMoreTimeEnable) {
            console.log("Nice attempt!");
            return;
        }
        this.remainingTime += time;
        this.btnAddMoreTimeEnable = false;
        this.setHintBtnDisabled($event.target);
    }

    setHintBtnDisabled(btn) {
        btn.setAttribute("disabled", "disabled");
    }
}
