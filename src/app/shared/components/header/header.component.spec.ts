import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML elements', () => {
    it('should contain an h1-element with the title of the application', () => {
      const titleDebugElement: DebugElement = fixture.debugElement;
      const h1DebugElement = titleDebugElement.query(By.css('h1'));
      const h1Element: HTMLElement = h1DebugElement.nativeElement;

      expect(h1Element).toBeDefined();
      expect(h1Element.textContent).toEqual('kwisr.');
    });

    it('should contain a logo', () => {
      const logoDebugElement: DebugElement = fixture.debugElement;
      const svgDebugElement = logoDebugElement.query(By.css('svg'));
      const svgElement: HTMLElement = svgDebugElement.nativeElement;

      expect(svgElement).toBeDefined();
    });
  })
});
