// skills.component.ts
import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('skillsAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger('100ms', [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', description: 'Framework for building web applications', color: '#DD0031' },
    { name: 'JavaScript', description: 'Programming language for web development', color: '#F7DF1E' },
    { name: 'TypeScript', description: 'Styling language for web pages', color: '#2965F1' },
    { name: 'HTML', description: 'Markup language for web pages', color: '#E34C26' },
    //{ name: '', description: 'Programming language for web development', color: '#3572A5' },
    { name: 'Java 8', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'Core Java', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'Spring Boot', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'Spring', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'Hibernate', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'SQL', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'PostgreSQL', description: 'Programming language for web development', color: '#f34b7d' },
    { name: 'Azure', description: 'Programming language for web development', color: '#f34b7d' },
    // Add more skills with different colors
  ];

  onMouseOver(skill: any): void {
    // Implement additional hover effects if needed
  }
}
