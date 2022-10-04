import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatSelectionListHarness } from '@angular/material/list/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QuizzesComponent } from './quizzes.component';
import { SharedModule } from '../shared/shared.module';

describe('QuizzesComponent', () => {
  let loader: HarnessLoader;
  let component: QuizzesComponent;
  let fixture: ComponentFixture<QuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ QuizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the QuizzesComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML elements', () => {
    it('should contain an h2-element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const h2DebugElement = debugElement.query(By.css('h2'));
      const h2Element: HTMLElement = h2DebugElement.nativeElement;

      expect(h2Element).toBeDefined();
    });
  });

  describe('Material elements', () => {
    it('should contain a mat-card', async () => {
      const card = await loader.getHarness<MatCardHarness>(MatCardHarness);

      expect(card).toBeDefined();
    });
  });
});
