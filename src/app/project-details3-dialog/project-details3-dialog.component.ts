import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details3-dialog',
  templateUrl: './project-details3-dialog.component.html',
  styleUrls: ['./project-details3-dialog.component.css']
})
export class ProjectDetails3DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
