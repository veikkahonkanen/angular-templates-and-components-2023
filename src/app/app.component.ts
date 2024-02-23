import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common";
import { FirstChildComponent } from "./first-child/first-child.component";
import { SecondChildComponent } from "./second-child/second-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    FirstChildComponent,
    SecondChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string = 'skills';
  divColor: string = "Black";
  approved: boolean = true;
  userInput: string = "Hello";
  messages: string[] = [ "Hello", "from", "SkillSoft" ];
  @ViewChild(SecondChildComponent) secondChild!: SecondChildComponent;
  // messageToChildren: string = "Hello from parent";

  getTitle(): string {
    return this.title;
  }

  makeBlue() {
    this.divColor = "Blue";
    this.approved = !this.approved;
  }

  // in HTML: (input)="handleInput($event)"
  handleInput(event: Event) {
    console.log("Event handled!", (event.target as HTMLInputElement).value);
    this.userInput = (event.target as HTMLInputElement).value;
  }

  messageToChildren(): string {
    return "Hello from parent";
  }

  messageFromChildren(msg: string): void {
    console.log("ok", msg);
  }

  ngAfterViewInit() {
    this.secondChild.calledFromParent();
  }
}
