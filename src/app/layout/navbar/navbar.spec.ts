import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Navbar } from "./navbar";
import { Router } from "@angular/router";

describe ('Navbar', () => {
  let component : Navbar;
  let fixture : ComponentFixture<Navbar>;
  // create fake object navigate method
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach (async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        {provide: Router, useValue: routerSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should create Navbar component', () => {
    expect(component).toBeTruthy();
  });

  it ('should call router.navigate when correct path on clickEvent', () => {
    const path = '/home';
    component.clickEvent(path);
    expect(routerSpy.navigate).toHaveBeenCalledWith([path]);
  });

  it ('should throw error when navigate to func called', () => {
    expect(() => component.navigateTo()).toThrowError('Method not implemented.')
  });
})