import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetails2DialogComponent } from './project-details2-dialog.component';

describe('ProjectDetails2DialogComponent', () => {
  let component: ProjectDetails2DialogComponent;
  let fixture: ComponentFixture<ProjectDetails2DialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetails2DialogComponent]
    });
    fixture = TestBed.createComponent(ProjectDetails2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
