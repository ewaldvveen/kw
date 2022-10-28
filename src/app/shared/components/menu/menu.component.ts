import { Component } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'kw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems: Menu[] = [
    {
      name: 'Kwisoverzicht',
      path: '/quizzes',
      icon: 'play_circle'
    },
    {
      name: 'Hoe werkt het?',
      path: '/quizzes',
      icon: 'help_outline'
    },
    {
      name: 'Over kwisr.',
      path: '/quizzes',
      icon: 'info'
    },
    {
      name: 'Contact',
      path: '/quizzes',
      icon: 'alternate_email'
    },
  ];
}
