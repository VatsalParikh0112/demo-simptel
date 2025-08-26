import { Component } from '@angular/core';
import { Button1 } from '../../shared/button1/button1';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { Section1 } from './section-1/section-1';

@Component({
  selector: 'app-contact',
  imports: [Button1, ReactiveFormsModule, Button, Section1],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  profileForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  })

  onSubmit() {
    console.log(this.profileForm.value.name);
    console.log(this.profileForm.value.email);
    console.log(this.profileForm.value.password);

  }

  receivedMessage: string = '...waiting for message';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
