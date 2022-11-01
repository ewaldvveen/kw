import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'kw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private location: Location) {}
  CloseMenu(): void {
    this.location.back();
  }
 }
