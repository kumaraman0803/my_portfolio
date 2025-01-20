import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard2Component } from './project-card2.component';

describe('ProjectCard2Component', () => {
  let component: ProjectCard2Component;
  let fixture: ComponentFixture<ProjectCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCard2Component]
    });
    fixture = TestBed.createComponent(ProjectCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
