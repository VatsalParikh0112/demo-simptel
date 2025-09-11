import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';
import { By } from '@angular/platform-browser';

describe('Button Component', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default label as empty string', () => {
    expect(component.label()).toBe('');
  });

  it('should update label when input is changed', () => {
    fixture.componentRef.setInput('label', 'Click Me');
    fixture.detectChanges();

    expect(component.label()).toBe('Click Me');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toContain('Click Me');
    expect(buttons[1].nativeElement.textContent).toContain('Click Me');
  });

  it('should emit message when notifyParent() is called directly', () => {
    spyOn(component.sendMessage, 'emit');
    component.notifyParent();
    expect(component.sendMessage.emit).toHaveBeenCalledWith('message from child');
  });

  it('should emit message when second button (with click handler) is clicked', () => {
    spyOn(component.sendMessage, 'emit');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].nativeElement.click(); // click the second button

    expect(component.sendMessage.emit).toHaveBeenCalledWith('message from child');
  });

  it('should not emit before notifyParent() is called', () => {
    spyOn(component.sendMessage, 'emit');
    expect(component.sendMessage.emit).not.toHaveBeenCalled();
  });

  it('should emit multiple times if notifyParent() is called multiple times', () => {
    spyOn(component.sendMessage, 'emit');

    component.notifyParent();
    component.notifyParent();

    expect(component.sendMessage.emit).toHaveBeenCalledTimes(2);
  });
});
