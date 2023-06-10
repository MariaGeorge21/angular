import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pass data from parent to child', () => {
    const childComponent = fixture.debugElement.nativeElement.querySelector('app-child');
    expect(childComponent.textContent).toContain(component.message);
  });

  it('should receive notification from child', () => {
    const childComponent = fixture.debugElement.nativeElement.querySelector('app-child');
    const button = childComponent.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.notification).toBe('Hello from child!');
  });
});