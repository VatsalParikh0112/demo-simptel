import { Component, EventEmitter, output } from '@angular/core';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-section-1',
  imports: [Button],
  templateUrl: './section-1.html',
  styleUrl: './section-1.css'
})
export class Section1 {
   messageEvent = new EventEmitter<string>();

  notifyParent() {
    this.messageEvent.emit('Hello from the child!');
  }
}
