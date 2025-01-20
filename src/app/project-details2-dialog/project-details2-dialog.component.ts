import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details2-dialog',
  templateUrl: './project-details2-dialog.component.html',
  styleUrls: ['./project-details2-dialog.component.css']
})
export class ProjectDetails2DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
