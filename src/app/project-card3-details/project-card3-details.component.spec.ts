import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard3DetailsComponent } from './project-card3-details.component';

describe('ProjectCard3DetailsComponent', () => {
  let component: ProjectCard3DetailsComponent;
  let fixture: ComponentFixture<ProjectCard3DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCard3DetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectCard3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
