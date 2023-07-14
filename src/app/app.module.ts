import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingComponent } from './landing/landing.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IconComponent } from './icon/icon.component';
import {MatCardModule} from '@angular/material/card';
import { ResumeComponent } from './resume/resume.component';
import { MainComponent } from './main/main.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ElineComponent } from './eline/eline.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidenavComponent,
    IconComponent,
    ResumeComponent,
    MainComponent,
    ResumePageComponent,
    ElineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    ClipboardModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
