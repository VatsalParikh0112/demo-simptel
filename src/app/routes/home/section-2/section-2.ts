import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-2',
  imports: [],
  templateUrl: './section-2.html',
  styleUrl: './section-2.css'
})
export class Section2 {
  @Input() msg: string = '';
  @Output() msgChange = new EventEmitter<string>();

  updateMessage() {
    this.msgChange.emit('Hi from Child');
  }
}
