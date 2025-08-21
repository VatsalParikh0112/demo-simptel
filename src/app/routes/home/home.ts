import { Component } from '@angular/core';
import { Section1 } from './section-1/section-1';
import { Section2 } from './section-2/section-2';
import { Section3 } from './section-3/section-3';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Section1, Section2, Section3 ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private _message = 'Home component !!!';

    get message ():string {
    return this._message;
  }

  set message(value:string) {
    this._message = value.toUpperCase();
  }

}