import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirstChildChildComponent } from "../first-child-child/first-child-child.component";

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [
    FirstChildChildComponent
  ],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css'
})
export class FirstChildComponent {
  @Input() messageFromParent: string = "";
  @Output() eventEmitter: EventEmitter<string> = new EventEmitter<string>();
  messageFromChild: string = "Message from first-child";
  
  generateChildMessage() {
    this.eventEmitter.emit(this.messageFromChild);
  }
}
