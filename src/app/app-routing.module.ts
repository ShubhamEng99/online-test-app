import { ResultsComponent } from './results/results/results.component';
import { ReviewComponent } from './review/review/review.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz/quiz.component';

const routes: Routes = [
  {path:'',component:QuizComponent},
  {path:'review',component:ReviewComponent},
  {path:'results',component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
