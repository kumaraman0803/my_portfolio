import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard3Component } from './project-card3.component';

describe('ProjectCard3Component', () => {
  let component: ProjectCard3Component;
  let fixture: ComponentFixture<ProjectCard3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCard3Component]
    });
    fixture = TestBed.createComponent(ProjectCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
