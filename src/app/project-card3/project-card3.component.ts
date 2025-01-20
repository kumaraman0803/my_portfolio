import { Component, Input } from '@angular/core';
import { ProjectDetails3DialogComponent } from '../project-details3-dialog/project-details3-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-card3',
  templateUrl: './project-card3.component.html',
  styleUrls: ['./project-card3.component.css']
})
export class ProjectCard3Component {
  @Input() project: any; // Assuming project is passed as Input

  constructor(public dialog: MatDialog) {}

  openProjectDetailsDialog() {
    this.dialog.open(ProjectDetails3DialogComponent, {
      width: '600px',
      data: {
        projectName: this.project.name,
        description: this.project.description,
        // Add more data as needed
      }
    });

}}
