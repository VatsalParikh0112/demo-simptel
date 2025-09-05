import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';
import { By } from '@angular/platform-browser';

fdescribe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label in html', () => {
    fixture.componentRef.setInput('label', '');
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toContain('');
  });

  it('should emit msg when notify parent func is called', () => {
    spyOn(component.sendMessage, "emit");
    component.notifyParent();
    expect(component.sendMessage.emit).toHaveBeenCalledWith('message from child');
  })
});