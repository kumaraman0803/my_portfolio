import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard2DetailsComponent } from './project-card2-details.component';

describe('ProjectCard2DetailsComponent', () => {
  let component: ProjectCard2DetailsComponent;
  let fixture: ComponentFixture<ProjectCard2DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCard2DetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectCard2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
