import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { CreateQuestionComponent } from './components/createQuestion/createQuestion.component'; 
import { MainComponent } from './components/main/main.component';
import { Tests } from './components/Tests/Tests.component';
import { QuestionService } from './services/question.service';
import { HttpClientModule } from '@angular/common/http';
import { Question } from './components/question/question.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateQuestionComponent,
    MainComponent,
    Tests,
    Question
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
