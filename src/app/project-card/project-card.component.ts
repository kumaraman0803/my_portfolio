import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectDetailsDialogComponent } from '../project-details-dialog/project-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any; // Assuming project is passed as Input

  constructor(public dialog: MatDialog) {}

  openProjectDetailsDialog() {
    this.dialog.open(ProjectDetailsDialogComponent, {
      width: '600px',
      data: {
        projectName: this.project.name,
        description: this.project.description,
        // Add more data as needed
      }
    });
}}
