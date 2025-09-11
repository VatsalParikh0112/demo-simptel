import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { About } from './about';
import { Dataservice } from '../../services/data';
import { Button } from '../../shared/button/button';

// --- Mock Child Component ---
// Create a fake version of the Button component to isolate the About component.
@Component({ selector: 'app-button', template: '', standalone: true })
class MockButton {}
// -----------------------------

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;
  // Create a spy object for the Dataservice with all the methods we need to test
  let dataServiceSpy: jasmine.SpyObj<Dataservice>;

  beforeEach(async () => {
    // Initialize the spy object
    const spy = jasmine.createSpyObj('Dataservice', [
      'getProducts', 
      'addProducts', 
      'removeProduct', 
      'clearProducts'
    ]);

    await TestBed.configureTestingModule({
      imports: [About], // Import the standalone component under test
      providers: [
        // Provide our mock service instead of the real one
        { provide: Dataservice, useValue: spy }
      ]
    })
    .overrideComponent(About, {
      // Replace the real Button component with our mock version
      remove: { imports: [Button] },
      add: { imports: [MockButton] }
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    // Get the injected spy instance
    dataServiceSpy = TestBed.inject(Dataservice) as jasmine.SpyObj<Dataservice>;

    // Set the required signal inputs before the first change detection
    fixture.componentRef.setInput('aboutId', '123');
    fixture.componentRef.setInput('limit', '10');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products from the service on ngOnInit', () => {
    // Arrange: Tell the spy what to return when getProducts is called
    const mockProducts = ['Milk', 'Bread'];
    dataServiceSpy.getProducts.and.returnValue(mockProducts);

    // Act: Trigger the ngOnInit lifecycle hook
    fixture.detectChanges();

    // Assert: Check that the productList was updated and the service was called
    expect(component.productList).toEqual(mockProducts);
    expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should call addProducts and refresh the list when addNewProduct is called with a valid name', () => {
    // Arrange
    const newProduct = 'Cheese';
    const updatedList = ['Milk', 'Bread', 'Cheese'];
    // After adding, the next getProducts call should return the updated list
    dataServiceSpy.getProducts.and.returnValue(updatedList);
    
    // Act
    component.addNewProduct(newProduct);

    // Assert
    expect(dataServiceSpy.addProducts).toHaveBeenCalledOnceWith(newProduct);
    expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
    expect(component.productList).toEqual(updatedList);
  });

  it('should NOT call addProducts if the product name is empty', () => {
    // Act
    component.addNewProduct('');

    // Assert
    expect(dataServiceSpy.addProducts).not.toHaveBeenCalled();
  });

  it('should call removeProduct and refresh the list when removeProduct is called', () => {
    // Arrange
    const productToRemove = 'Bread';
    const updatedList = ['Milk'];
    dataServiceSpy.getProducts.and.returnValue(updatedList);
    
    // Act
    component.removeProduct(productToRemove);

    // Assert
    expect(dataServiceSpy.removeProduct).toHaveBeenCalledOnceWith(productToRemove);
    expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
    expect(component.productList).toEqual(updatedList);
  });

  it('should call clearProducts and refresh the list when clearProducts is called', () => {
    // Arrange
    dataServiceSpy.getProducts.and.returnValue([]); // After clearing, getProducts returns an empty array

    // Act
    component.clearProducts();

    // Assert
    expect(dataServiceSpy.clearProducts).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
    expect(component.productList).toEqual([]);
  });
});