import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1 } from './section-1';

describe('Section1', () => {
  let component: Section1;
  let fixture: ComponentFixture<Section1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Section1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct message when notifyParent is called', () => {
    const emitSpy = spyOn(component.messageEvent, 'emit');
    const expectedMessage = 'Hello from the child!';

    component.notifyParent();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(expectedMessage);
  });
});
