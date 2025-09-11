import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button2 } from './button-2';

describe('Button2', () => {
  let component: Button2;
  let fixture: ComponentFixture<Button2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render label in html", () => {
    expect(component.label()).toBe('');
  });

  it("should emit the path when function is called", () => {
    const emitSpy = spyOn(component.goToContact,'emit');
    const expectedPath = '/contact';
    component.changePage();
    expect (emitSpy).toHaveBeenCalledWith(expectedPath);
  });
});
