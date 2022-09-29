import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatIconHarness } from '@angular/material/icon/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';

describe('HeaderComponent', () => {
  let loader: HarnessLoader;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML elements', () => {
    it('should contain an h1-element with the title of the application', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const h1DebugElement = debugElement.query(By.css('h1'));
      const h1Element: HTMLElement = h1DebugElement.nativeElement;

      expect(h1Element).toBeDefined();
      expect(h1Element.textContent).toEqual('kwisr.');
    });

    it('should contain a logo', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const svgDebugElement = debugElement.query(By.css('svg'));
      const svgElement: HTMLElement = svgDebugElement.nativeElement;

      expect(svgElement).toBeDefined();
    });

    it('should contain a menu', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const menuDebugElement = debugElement.query(By.css('kw-menu'));
      const menuElement: HTMLElement = menuDebugElement.nativeElement;

      expect(menuElement).toBeDefined();
    });
  })

  describe('Material elements', () => {
    it('should contain a mat-toolbar', async () => {
      const toolbar = await loader.getHarness<MatToolbarHarness>(MatToolbarHarness);

      expect(toolbar).toBeDefined();
    });

    it('should contain a hamburger mat-icon', async () => {
      const iconHarness = await loader.getHarness<MatIconHarness>(MatIconHarness);
      const icon = await iconHarness.getName();

      expect(icon).toEqual('menu');
    });
  });
});
