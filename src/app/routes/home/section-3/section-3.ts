import { Component, Input } from '@angular/core';
import { Button1 } from '../../../shared/button1/button1';
import { Button } from '../../../shared/button/button';


@Component({
  selector: 'app-section-3',
  imports: [Button1, Button],
  templateUrl: './section-3.html',
  styleUrl: './section-3.css'
})
export class Section3 {
private _userName:string = '';

  get userName(): string {
    return this._userName.toUpperCase(); // Transforms the data before displaying
  }

  // Setter for userName
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
}