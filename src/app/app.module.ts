import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProductCardDetailsComponent } from './project-card-details/project-card-details.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectCard2DetailsComponent } from './project-card2-details/project-card2-details.component';
import { ProjectCard2Component } from './project-card2/project-card2.component';
import { ProjectCard3Component } from './project-card3/project-card3.component';
import { ProjectDetailsDialogComponent } from './project-details-dialog/project-details-dialog.component';
import { ProjectDetails2DialogComponent } from './project-details2-dialog/project-details2-dialog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCard3DetailsComponent } from './project-card3-details/project-card3-details.component';
import { ProjectDetails3DialogComponent } from './project-details3-dialog/project-details3-dialog.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ProjectCardComponent,
    ProjectCard2Component,
    ProjectCard3Component,
    ProductCardDetailsComponent,
    ProjectDetailsDialogComponent,
    ProjectCard2DetailsComponent,
    ProjectDetails2DialogComponent,
    ProjectCard3DetailsComponent,
    ProjectDetails3DialogComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
