import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent {
  approved: boolean = true;
  // fName: string = ""
  @ViewChild("fName") fName!: ElementRef;

  getApproval(cb: HTMLInputElement) {
    // console.log(cb.checked);
    // this.fName = cb.value;
    console.log(this.fName.nativeElement.value);
  }

  calledFromParent() {
    console.log("Called from parent!");
  }
}
