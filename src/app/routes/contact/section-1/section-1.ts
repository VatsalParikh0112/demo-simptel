import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-1',
  imports: [],
  templateUrl: './section-1.html',
  styleUrl: './section-1.css'
})
export class Section1 {
  @Output() messageEvent = new EventEmitter<string>();

  notifyParent() {
    this.messageEvent.emit('Hello from the child!');
  }
}
