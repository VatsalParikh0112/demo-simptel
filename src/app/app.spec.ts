import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    deb = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check when calculate function is called', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('should add 2 numbers when savedata func is called', () => {
    spyOn(component, 'calculate').and.returnValues(20);

    let sum = component.saveData();

    expect(component.calculate).toHaveBeenCalledWith(5, 15);
    expect(sum).toBe(20);
  });

  it('should increase value when increase function is called', () => {
    const btnI = deb.query(By.css('#increase'));

    btnI.triggerEventHandler('click', {})
    fixture.detectChanges();

    expect(component.num).toBe(1);
  });

  it('should decrease value when decrease function is called', () => {
    component.num = 2;
    fixture.detectChanges();

    const btnD = deb.query(By.css('#decrease'));
    btnD.triggerEventHandler('click', {})
    fixture.detectChanges();

    expect(component.num).toBe(1);
  });
});
