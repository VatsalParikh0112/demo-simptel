import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { Button2 } from '../../../shared/button-2/button-2';


@Component({
  selector: 'app-section-3',
  imports: [ Button, Button2],
  templateUrl: './section-3.html',
  styleUrl: './section-3.css'
})
export class Section3 {

private _userName:string = '';

  get userName(): string {
    return this._userName.toUpperCase();
  }

  @Input()
  set userName(name: string) {
    if (name.length > 2) {
      this._userName = name;
      console.log(`User name has been set to: ${name}`);
    } else {
      this._userName = 'Guest'; // Provides a default value if the input is invalid
      console.log('Invalid user name. Defaulting to Guest.');
    }
  }

  get welcomeMessage(): string {
    return `Welcome, ${this.userName}!`;
  }

  console(event:string) {
    console.log(event);
  }

  constructor(private router: Router) {}


  redirect (path:any) {
    this.router.navigate([path])
  }
}