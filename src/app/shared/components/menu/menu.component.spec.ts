import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatIconHarness } from '@angular/material/icon/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared.module';

describe('MenuComponent', () => {
  let loader: HarnessLoader;
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
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

  describe('Material elements', () => {
    it('should contain a close mat-icon', async () => {
      const iconHarness = await loader.getHarness<MatIconHarness>(MatIconHarness);
      const icon = await iconHarness.getName();

      expect(icon).toEqual('close');
    });
  });
});
