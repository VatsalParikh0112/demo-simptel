import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Button1 } from './button1';

describe('Button1', () => {
  let component: Button1;
  let fixture: ComponentFixture<Button1>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [Button1],
      providers: [{ provide: Router, useValue: spy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Button1);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('Button should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should display label when no label input is provided', () => {
    fixture.detectChanges();
    expect(component.label()).toBe('');
  })

  it('should display label when input is provided', () => {
    fixture.componentRef.setInput('label', 'Home button');
    fixture.detectChanges();
    expect(component.label()).toBe('Home button')
  })

  it('should navigate to root when redirect func is called', () => {
    component.redirect();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  })

  it('should redirect to root when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/'])
  })
});
