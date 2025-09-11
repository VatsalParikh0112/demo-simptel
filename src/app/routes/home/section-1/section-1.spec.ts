import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1 } from './section-1';
import { FormsModule } from '@angular/forms';

describe('Section1', () => {
  let component: Section1;
  let fixture: ComponentFixture<Section1>;
  let logSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Section1);
    component = fixture.componentInstance;
    logSpy = spyOn(console, 'log').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the initial empty inputValue on init', () => {
    fixture.detectChanges();
    expect (logSpy).toHaveBeenCalledWith('');
  })

  it ('should log the updated inputValue when onClick func called', () => {
    const newMessage = 'xyz';
    component.inputValue = newMessage;

    component.onClick();

    expect(logSpy).toHaveBeenCalledWith(newMessage);
  });
});
