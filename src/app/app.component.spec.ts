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
    it('should contain a router-outlet element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const mainDebugElement = debugElement.query(By.css('router-outlet'));
      const mainElement: HTMLElement = mainDebugElement.nativeElement;

      expect(mainElement).toBeDefined();
    });
  });
});
