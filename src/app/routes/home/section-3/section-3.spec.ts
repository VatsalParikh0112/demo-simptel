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

  it('should return value to upperCase when useName function is called', () => {
    component['_userName'] = 'alice';
    expect(component.userName).toBe('ALICE');
  });

  it('should generate correct message for valid users', () => {
    component.userName = 'Karma';
    expect(component.welcomeMessage).toBe('Welcome, KARMA!')
  });

  it('should generate default message for invalid users', () => {
    component.userName = 'a';
    expect(component.welcomeMessage).toBe('Welcome, GUEST!');
  });

  it('should log provided event via console.log method', () => {
    const eventMessage = "Button is clicked";
    component.console(eventMessage);
    expect(logSpy).toHaveBeenCalledWith(eventMessage);
  });

  it('should call router.navigate with the provided path via the redirect method', () => {
    const path = '/home';
    component.redirect(path);
    expect(routerSpy.navigate).toHaveBeenCalledWith([path]);
  });
}); 
