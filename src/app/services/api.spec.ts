import { TestBed } from '@angular/core/testing';
import { Api } from './api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { users } from '../interfaces/users';
import { of } from 'rxjs';

describe('Api', () => {
  let service: Api;
  let HttpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      providers: [
        Api,
        { provide: HttpClient, useValue: spy }
      ]
    });

    service = TestBed.inject(Api);
    HttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the list of users when getUser is called (GET)', () => {
    const expectedUsers: users[] = [
      { id: 1, name: 'John Doe', email: 'john@test.com', password: '123' },
      { id: 2, name: 'Jane Smith', email: 'jane@test.com', password: '456' }
    ];
    const expectedUrl = 'https://jsonplaceholder.typicode.com/users?_limit=3';

    HttpClientSpy.get.and.returnValue(of(expectedUsers));

    service.getUser().subscribe(
      res => {
        expect(res).toEqual(expectedUsers);
      },
      fail
    );

    expect(HttpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(HttpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should fetch users (GET)', () => {
    const mockUsers: users[] = [
      {
        id: 1,
        name: 'John',
        email: 'john@test.com',
        password: '1234567vv'
      }
    ];

    const params = new HttpParams().set('id', '1');
    const expectedUrl = 'https://jsonplaceholder.typicode.com/users?_limit=3';

    HttpClientSpy.get.and.returnValue(of(mockUsers));

    service.getUserById(1).subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });
    expect(HttpClientSpy.get).toHaveBeenCalledWith(expectedUrl, { params });

  });

  it('should add user (POST)', () => {
    const newUser: users[] = [
      {
        id: 1,
        name: 'John',
        email: 'john@test.com',
        password: '1234567vv'
      }
    ];

    HttpClientSpy.post.and.returnValue(of(newUser));

    service.addUser(newUser).subscribe((res) => {
      expect(res).toEqual(newUser);
    });

    expect(HttpClientSpy.post).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users?_limit=3',
      newUser
    );
  });

  it('should delete user (GET with params)', () => {
    const mockUser: users[] = [
      {
        id: 1,
        name: 'John',
        email: 'john@test.com',
        password: '1234567vv'
      }
    ];
    const params = new HttpParams().set('id', '3');

    HttpClientSpy.get.and.returnValue(of(mockUser));

    service.deleteUser(3).subscribe((res) => {
      expect(res).toEqual(mockUser);
    });

    expect(HttpClientSpy.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users?_limit=3',
      { params }
    );
  });

});