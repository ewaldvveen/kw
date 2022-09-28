import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the MenuComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML elements', () => {
    it('should contain a nav element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const navDebugElement = debugElement.query(By.css('nav'));
      const navElement: HTMLElement = navDebugElement.nativeElement;

      expect(navElement).toBeDefined();
    });

    it('should contain a menu list', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const ulDebugElement = debugElement.query(By.css('ul'));
      const listElement: HTMLElement = ulDebugElement.nativeElement;

      expect(listElement).toBeDefined();
    });

    it('should contain one or more menu list items', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const listItemElement = debugElement.nativeElement.querySelectorAll('li');

      expect(listItemElement.length).toBeGreaterThan(0);
    });
  });
});
