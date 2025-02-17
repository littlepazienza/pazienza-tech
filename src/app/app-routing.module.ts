import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'resume', component: ResumePageComponent },
    { path: 'portfolio', component: PortfolioComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
