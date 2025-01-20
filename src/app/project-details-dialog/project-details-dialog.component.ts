import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details-dialog',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.css']
})
export class ProjectDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
