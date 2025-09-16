import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1 } from './section-1';
import { emit } from 'process';

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

  it('should create section-1/contact', () => {
    expect(component).toBeTruthy
  });
  
  it('should notify parent when notifyParent func is called', () => {
    spyOn(component.messageEvent, 'emit');
    component.notifyParent();
    expect(component.messageEvent.emit).toHaveBeenCalledWith('Hello from the child!');
  })
});
