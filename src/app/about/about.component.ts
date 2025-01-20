import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutContent: string = `
    Hey there! I'm Kumar Aman, a driven software engineer with a passion for crafting exceptional digital experiences. 
    With over 2 years of hands-on expertise in Java full-stack development, I thrive on creating robust solutions that marry innovation with functionality.

    My Journey:

    Tech Savvy: I specialize in Java, harnessing frameworks like Spring Boot and Hibernate to build scalable backend systems. 
    I bring projects to life with Angular on the frontend, ensuring seamless user interfaces that captivate and delight.

    Problem Solver: Complex challenges are my playground. I enjoy diving deep into problems, dissecting them piece by piece, 
    and engineering solutions that not only meet but exceed expectations. My attention to detail ensures every line of code serves a purpose.

    Collaboration Champion: I believe great ideas blossom in collaboration. As a team player, I thrive in environments where diverse perspectives 
    come together to innovate. I've honed my communication skills to foster open dialogue and drive project success.

    Continuous Learner: In the ever-evolving tech landscape, I embrace learning as a lifelong journey. I stay ahead by staying curious, exploring 
    new technologies, and adopting best practices that elevate my craft.

    Beyond Code:

    When I'm not coding, you can find me on the cricket playground. This balance fuels my creativity and keeps me inspired to push boundaries 
    in my professional endeavors.

    Let's connect! Whether it's discussing a potential collaboration or sharing insights on the latest tech trends, I'm eager to embark on 
    meaningful projects that make a difference.
  `;

}
