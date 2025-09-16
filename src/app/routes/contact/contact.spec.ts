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

  it('should create contact', () => {
    expect(component).toBeTruthy();
  })

  it('should be invalid when profileForm is empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  })

  it('should create profile form', () => {
    expect(component.profileForm.contains('userName')).toBeTrue();
    expect(component.profileForm.contains('email')).toBeTrue();
    expect(component.profileForm.contains('password')).toBeTrue();
  })

  it('should validate userName', () => {
    const userName = component.profileForm.controls['userName'];
    userName.setValue('Vat');
    expect(userName.valid).toBeFalse();

    userName.setValue('Vatsal');
    expect(userName.valid).toBeTrue();
  })

  it('should validate email', () => {
    const email = component.profileForm.controls['email'];
    email.setValue('vatsal');
    expect(email.valid).toBeFalse();

    email.setValue('Vatsal@test.com');
    expect(email.valid).toBeTrue();
  })

  it('should validate password', () => {
    const password = component.profileForm.controls['password'];
    password.setValue('Vatsal');
    expect(password.valid).toBeFalse();

    password.setValue('Vatsal123');
    expect(password.valid).toBeTrue();
  })

  it('should submit form and reset form controls', () => {
    component.profileForm.setValue({
      userName: 'Vatsal',
      email: 'Vatsal@test.com',
      password: 'Vatsal123'
    });

    component.onSubmit();

    expect(component.formValues).toEqual({
      userName: 'Vatsal',
      email: 'Vatsal@test.com',
      password: 'Vatsal123'
    });

    expect(component.profileForm.value).toEqual({
      userName: null,
      email: null,
      password: null
    });
  });


  it('should not submit form values if form invalid', () => {
    component.profileForm.setValue({
      userName: 'Vv',
      email: 'bad',
      password: '123'
    })

    component.onSubmit();

    expect(component.formValues).toBeUndefined();
  })

  it('should reset after submit func is called', () => {

    component.profileForm.setValue({
      userName: 'Vatsal',
      email: 'Vatsal@test.com',
      password: 'Vatsal123'
    })

    component.reset();

    expect(component.formValues).toBeUndefined();
  })

  it('should recieve message when recievedMessage func is called', () => {
    expect(component.receivedMessage).toBe('...waiting for message');
    component.receiveMessage('Hello World');
    expect(component.receivedMessage).toBe('Hello World');
  })
});
