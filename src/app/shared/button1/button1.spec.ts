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
      providers: [{provide : Router, useValue : spy}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Button1);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label in html', () => {
    expect(component.label()).toBe('');
  });

  it('should call router.navigate when redirect function is called ', () => {
    component.redirect();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  })
});
