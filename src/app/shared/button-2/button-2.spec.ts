import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button2 } from './button-2';

describe('Button2', () => {
  let component: Button2;
  let fixture: ComponentFixture<Button2>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button2]
    }).compileComponents();

    fixture = TestBed.createComponent(Button2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create button2', () => {
    expect(component).toBeTruthy();
  })

  it('should handle an empty label', () => {
    fixture.componentRef.setInput('label', 'ClickMe');
    fixture.detectChanges();
    expect(component.label()).toBe('ClickMe');
  })

  it('should emit "/changePage" when changePage func is called', () => {
    spyOn(component.goToContact, 'emit');
    component.changePage();
    expect(component.goToContact.emit).toHaveBeenCalledWith('/contact');
  })
});