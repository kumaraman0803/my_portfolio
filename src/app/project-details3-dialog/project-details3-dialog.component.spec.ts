import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetails3DialogComponent } from './project-details3-dialog.component';

describe('ProjectDetails3DialogComponent', () => {
  let component: ProjectDetails3DialogComponent;
  let fixture: ComponentFixture<ProjectDetails3DialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetails3DialogComponent]
    });
    fixture = TestBed.createComponent(ProjectDetails3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
