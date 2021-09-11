import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'resume', component: ResumePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
