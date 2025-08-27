import { Component } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { Button1 } from '../../shared/button1/button1';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { Section1 } from './section-1/section-1';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Button1, ReactiveFormsModule, Button, Section1, A11yModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {  
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email
    ])
  });

  formValues: any;

  onSubmit() {
    if (this.profileForm.valid) {
      this.formValues = this.profileForm.value;
    }
  }

  receivedMessage: string = '...waiting for message';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
