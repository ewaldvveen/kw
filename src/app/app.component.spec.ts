import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  describe('HTML elements', () => {
    it('should contain a header element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const headerDebugElement = debugElement.query(By.css('header'));
      const headerElement: HTMLElement = headerDebugElement.nativeElement;

      expect(headerElement).toBeDefined();
    });

    it('should contain a main element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const mainDebugElement = debugElement.query(By.css('main'));
      const mainElement: HTMLElement = mainDebugElement.nativeElement;

      expect(mainElement).toBeDefined();
    });

    it('should contain a footer element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const footerDebugElement = debugElement.query(By.css('footer'));
      const footerElement: HTMLElement = footerDebugElement.nativeElement;

      expect(footerElement).toBeDefined();
    });
  });
});
