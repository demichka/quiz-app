# QuizApp

## Welcome to Quiz App

Run `npm install` in root folder
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Test applications with following steps:
1. Click on Start Quiz button. Quiz starts, first question is shown, countdown timer starts from 15.
2. Click on question's alternative that is supposed to be correct, then click on Next, next question is shown
3. Click on question's alternative that is supposed to be incorrect (don't worry, quiz is rather simple). Click on Next button, next question is shown
4. Click on Next button without choice, next question is shown
5. Wait for 15 seconds, countdown finished, next question is shown
6. Click on 50/50 button, 2 incorrect alternatives are hidden. 50/50 button is disabled. Click on Next button, next question is shown
7. Click on +10 sec button, countdown timer will be increased with 10 seconds. +10 sec button is disabled. Click on Next button, next question is shown
8. Make your choice, Click on Next button, next question is shown
9. Continue step 8 to the last (10) question, button Next changes to Finish
10. Click on Finish button, quiz is finished, statistics view is shown. It contains statistics list and button Start quiz again.
11. Check statistics. It must contain at least 1 correct (according to step 2), at least 1 incorrect (according to step 3), at least 2 missed (according to steps 4, 5). Average time shows average time per 1 question including missed
12. Click on Start quiz again and test the app one more time. Question's list is reset.


Unit tests are poorly represented in this version, but run  `ng test` to execute the unit tests to check them.
