import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Section3 } from './section-3';
import { Router } from '@angular/router';

describe('Section3', () => {
  let component: Section3;
  let fixture: ComponentFixture<Section3>;
  let logSpy: jasmine.Spy;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3],
      providers: [{ provide: Router, useValue: routerSpy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Section3);
    component = fixture.componentInstance;
    logSpy = spyOn(console, 'log').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return default empty', () => {
    expect(component.userName).toBe('');
  })

  it('should return userName to upperCase when userName func is called', () => {
    component['_userName'] = 'vatsal'
    expect(component.userName).toBe('VATSAL');
  })

  it('should set userName when length is more than 2', () => {
    component.userName = 'Vatsal';
    expect(component.userName).toBe('VATSAL');
    expect(console.log).toHaveBeenCalledWith('User name has been set to: Vatsal');
  })

  it('should set Guest when length is not more than 2 ', () => {
    component.userName = 'ab';
    expect(component.userName).toBe('GUEST');
    expect(console.log).toHaveBeenCalledWith('Invalid user name. Defaulting to Guest.');
  })

  it('should return welcome message when welcomeUser func is called', () => {
    component['_userName'] = 'Vatsal';
    expect(component.userName).toBe('VATSAL');
  })

  it('should console log event when console func is called', () => {
    component.console('Vatsal')
    expect(console.log).toHaveBeenCalledWith('Vatsal');
  })

  it('should redirect when redirect func is called', () => {
    component.redirect('/contact');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/contact']);
  })
}); 
