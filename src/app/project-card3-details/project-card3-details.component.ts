import { Component } from '@angular/core';
import { ProjectDetails3DialogComponent } from '../project-details3-dialog/project-details3-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector:'app-project-card3-details',
  templateUrl: './project-card3-details.component.html',
  styleUrls: ['./project-card3-details.component.css']
})
export class ProjectCard3DetailsComponent {
  constructor(public dialog: MatDialog) {}

  openProjectDetailsDialog() {
    this.dialog.open(ProjectDetails3DialogComponent, {
      width: '600px',
      data: {
        projectName: 'Cab Booking Application',
        description: 'Project description goes here.',
        // Add more data as needed
      }
    });
  }

}

  