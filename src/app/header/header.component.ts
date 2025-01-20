import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('logoAnimation', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.1)'
      })),
      transition('initial <=> hovered', animate('300ms ease-in-out'))
    ])
  ]
})

export class HeaderComponent implements OnInit {
  logoState = 'initial';

  constructor() { }

  ngOnInit(): void {
  }
  toggleLogoState(state: string): void {
    this.logoState = state;
  }

}
