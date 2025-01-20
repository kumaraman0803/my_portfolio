import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsDialogComponent } from '../project-details-dialog/project-details-dialog.component';

@Component({
  selector:'project-card2.component.html',
  templateUrl: './project-card2.component.html',
  styleUrls: ['./project-card2.component.css'],
})
export class ProjectCard2Component {
openProjectDetailsDialog() {
throw new Error('Method not implemented.');
}
  @Input() project: any; // Assuming project is passed as Input

  constructor(public dialog: MatDialog) {}

  
}