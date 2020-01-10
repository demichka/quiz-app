import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TimerService {
    private timerSubject = new Subject<boolean>();
    public timer$ = this.timerSubject.asObservable();

    private remainingTimeSubject = new Subject<number>();
    public remainingTime$ = this.remainingTimeSubject.asObservable();
    constructor() {}

    //func to set time is over when timer counted to 0 and user didn't click on Next btn (missed question)
    setTimeOver() {
        this.timerSubject.next(true);
    }

    //func to save remaining time in case if user clicked on Next Btn
    catchRamainingTime(time: number) {
        this.remainingTimeSubject.next(time);
    }
}
