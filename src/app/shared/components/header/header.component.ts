import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  OpenMenu(): void {
    this.router.navigateByUrl(`#main-menu`);
  }
}
