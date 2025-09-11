import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { API } from './api';
import { Api } from '../../services/api';
import { SlimUser } from '../../interfaces/users';

describe('API', () => {
    let component: API;
    let fixture: ComponentFixture<API>;
    let mockAPI: jasmine.SpyObj<Api>;

    const mockUsers: SlimUser[] = [
        { id: 1, name: 'jhon', email: 'jhon@test.com', password: 'jhon123' },
        { id: 2, name: 'jane', email: 'jane@test.com', password: 'jane234' }
    ];

    beforeEach(async () => {
        mockAPI = jasmine.createSpyObj('Api', ['getUser', 'addUser', 'deleteUser']);

        mockAPI.getUser.and.returnValue(of([]));
        mockAPI.addUser.and.returnValue(of(void 0));
        mockAPI.deleteUser.and.returnValue(of(void 0));

        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, API],
            providers: [{ provide: Api, useValue: mockAPI }, FormBuilder]
        }).compileComponents();

        fixture = TestBed.createComponent(API);
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should initialize form on ngOnInit', () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userForm).toBeDefined();
        expect(component.userForm.get('name')).toBeTruthy();
        expect(component.userForm.get('email')).toBeTruthy();
        expect(component.userForm.get('password')).toBeTruthy();
    });

    it('should load users from Api', () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        component.loadUsers();
        expect(component.user.length).toBe(2);
        expect(component.user[0].name).toBe('jhon');
    });

    it('form should be invalid when empty', () => {
        component.ngOnInit();
        expect(component.userForm.valid).toBeFalsy();
    });

    it('form should be valid with proper input', () => {
        component.ngOnInit();
        component.userForm.setValue({
            name: 'Alice',
            email: 'alice@test.com',
            password: 'pass123'
        });
        expect(component.userForm.valid).toBeTrue();
    });

    it('should add user when form is valid', () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));

        component.ngOnInit();
        component.userForm.setValue({
            name: 'New User',
            email: 'new@email.com',
            password: 'newpass'
        });

        const expectedUser = jasmine.objectContaining({
            name: 'New User',
            email: 'new@email.com',
            password: 'newpass'
        });

        mockAPI.addUser.and.returnValue(of({
            id: 3,
            name: 'New User',
            email: 'new@email.com',
            password: 'newpass'
        }));

        component.onSubmit();

        expect(mockAPI.addUser).toHaveBeenCalledWith(expectedUser);
        expect(component.user.length).toBe(3);
        expect(component.user.find(u => u.name === 'New User')).toBeTruthy();
    });

    it('should assign id = 1 when user list is empty', () => {
        mockAPI.getUser.and.returnValue(of([]));   // empty user list
        mockAPI.addUser.and.returnValue(of({
            id: 1,
            name: 'First User',
            email: 'first@email.com',
            password: 'pass123'
        }));

        component.ngOnInit();

        component.userForm.setValue({
            name: 'First User',
            email: 'first@email.com',
            password: 'pass123'
        });

        component.onSubmit();

        expect(component.user.length).toBe(1);
        expect(component.user[0].id).toBe(1);  // ✅ triggers the ":1" branch
    });

    it('should delete user', fakeAsync(() => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        mockAPI.deleteUser.and.returnValue(of(void 0));

        component.ngOnInit();
        tick();

        component.removeUser(1);
        tick(); 

        expect(mockAPI.deleteUser).toHaveBeenCalledWith(1);
        expect(component.user.find(u => u.id === 1)).toBeUndefined(); 
    }));


});