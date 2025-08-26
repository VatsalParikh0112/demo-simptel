import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-2',
  imports: [],
  templateUrl: './button-2.html',
  styleUrl: './button-2.css'
})
export class Button2 {
  @Input() label = 'default value';
  @Output() goToContact = new EventEmitter();

  changePage () {

    const path = '/contact';
    this.goToContact.emit( path );
  }
}
