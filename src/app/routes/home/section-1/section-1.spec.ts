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

  it('should create section-1', () => {
    expect(component).toBeTruthy();
  })

  it('should console input value when ngOnit called',() => {
    fixture.detectChanges();
    expect(logSpy).toHaveBeenCalledWith('');
  })

  it('should console input value when onClick func is called', () => {
    component.inputValue = 'Vatsal';
    component.onClick();
    fixture.detectChanges();
    expect(logSpy).toHaveBeenCalledWith('Vatsal');
  })
});
