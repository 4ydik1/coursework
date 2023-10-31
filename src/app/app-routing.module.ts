import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './components/createQuestion/createQuestion.component'; 
import { MainComponent } from './components/main/main.component';
import { ViewTests } from './components/viewTests/viewTests.component';

const routes: Routes = [
  {path: "", component:MainComponent},
  {path:"quiz-constructor", component:CreateQuestionComponent},
  {path:"tests", component:ViewTests},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
