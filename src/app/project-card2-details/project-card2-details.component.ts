import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetails2DialogComponent } from '../project-details2-dialog/project-details2-dialog.component';

@Component({
  selector: 'app-project-card2-details',
  templateUrl: './project-card2-details.component.html',
  styleUrls: ['./project-card2-details.component.css']
})
export class ProjectCard2DetailsComponent {
  constructor(public dialog: MatDialog) {}

  openProjectDetailsDialog() {
    this.dialog.open(ProjectDetails2DialogComponent, {
      width: '600px',
      data: {
        projectName: 'Blood Bank Application',
        description: 'Project description goes here.',
        // Add more data as needed
      }
    });
  }}


