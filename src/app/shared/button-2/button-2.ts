import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-2',
  imports: [],
  templateUrl: './button-2.html',
  styleUrl: './button-2.css'
})
export class Button2 {
  label = input<string>('');
  goToContact = output<string>();

  changePage () {
    const path = '/contact';
    this.goToContact.emit( path );
  }
}
