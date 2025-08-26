import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label = 'default value';
  @Output() sendMessage = new EventEmitter<string>();


  notifyParent () {
    this.sendMessage.emit ("message from child")
  }
}
