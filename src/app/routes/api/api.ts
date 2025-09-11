import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../../services/api';
import { SlimUser, users } from '../../interfaces/users';


@Component({
  selector: 'app-api',
  imports: [ReactiveFormsModule],
  templateUrl: './api.html',
  styleUrls: ['./api.css']
})
export class API implements OnInit {
  user: SlimUser[] = [];
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: Api) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loadUsers();
  }

  loadUsers() {
    this.api.getUser().subscribe((data: any) => {
      this.user = data.map((u: { id: number; name: string; email: string; password: string; }) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        password: u.password
      }));
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newId =
        this.user.length > 0
          ? Math.max(...this.user.map((u) => u.id)) + 1 : 1;

      const newUser: any = {
        id: newId,
        ...(this.userForm.value as Omit<SlimUser, 'id'>)  // 👈 CAST here
      };

      this.api.addUser(newUser).subscribe(() => {
        console.log('User added:', newUser);
        this.user.push(newUser);  // 👌 No more error
        this.userForm.reset();
      });
    }
  }

  removeUser(id: number) {
    this.api.deleteUser(id).subscribe(() => {
      console.log(`User with id=${id} deleted`);
      this.user = this.user.filter((u: { id: number; }) => u.id !== id);
    });
  }


}
