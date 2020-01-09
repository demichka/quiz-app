import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestionsListComponent } from "./components/questions-list/questions-list.component";
import { QuestionComponent } from "./components/question/question.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, QuestionsListComponent, QuestionComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
