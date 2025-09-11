import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { ReactiveFormsModule } from '@angular/forms';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when its empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  });

  it('should have an invalid userName control if userName is less then 6 characters', () => {
    component.profileForm.controls.userName.setValue('test');
    expect(component.profileForm.controls.userName.valid).toBeFalsy();
  })

  it('should have an invalid email control if email is in bad email format', () => {
    component.profileForm.controls.email.setValue('not-email');
    expect(component.profileForm.controls.email.valid).toBeFalsy();
  })

  it('should have an valid form when all fields are correct', () => {
    component.profileForm.controls.userName.setValue('Vatsal');
    component.profileForm.controls.email.setValue('Vatsal@mail.com');
    component.profileForm.controls.password.setValue('Poojan123');
    expect(component.profileForm.controls.email.valid).toBeTruthy();
  })

  it('should submit and reset the form if form is valid on submit', () => {
    const resetSpy = spyOn(component.profileForm, 'reset');
    const validData = {
      userName: 'Vatsal',
      email: 'Vatsal@mail.com',
      password: 'Poojan123',
    };

    component.profileForm.setValue(validData);
    component.onSubmit();
    expect(component.formValues).toEqual(validData);
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should NOT set formValues or reset if the form is invalid on submit', () => {
    const resetSpy = spyOn(component.profileForm, 'reset');
    component.formValues = undefined;
    component.onSubmit();
    expect(component.formValues).toBeUndefined();
    expect(resetSpy).not.toHaveBeenCalled();
  });

  it('should call reset on the profileForm when the reset method is called', () => {
    const resetSpy = spyOn(component.profileForm, 'reset');
    component.reset();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  // --- receiveMessage() Method Test ---
  it('should update the receivedMessage property when receiveMessage is called', () => {
    const testMessage = 'Hello from parent!';
    component.receiveMessage(testMessage);
    expect(component.receivedMessage).toBe(testMessage);
  });
});
