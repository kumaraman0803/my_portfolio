import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsDialogComponent } from '../project-details-dialog/project-details-dialog.component';

@Component({
  selector: 'app-project-card-details',
  templateUrl: './project-card-details.component.html',
  styleUrls: ['./project-card-details.component.css']
})
export class ProductCardDetailsComponent  {
  constructor(public dialog: MatDialog) {}

  openProjectDetailsDialog() {
    this.dialog.open(ProjectDetailsDialogComponent, {
      width: '600px',
      data: {
        projectName: 'Cab Booking Application',
        description: 'Project description goes here.',
        // Add more data as needed
      }
    });
  }}
