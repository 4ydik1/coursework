import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { CreateQuestionComponent } from './components/createQuestion/createQuestion.component'; 
import { MainComponent } from './components/main/main.component';
import { ViewTests } from './components/viewTests/viewTests.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateQuestionComponent,
    MainComponent,
    ViewTests
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
