import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldNBlue]',
  standalone: true
})
export class BoldNBlueDirective implements OnInit {
  @Input() appBoldNBlue: string = "";
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen(this.elRef.nativeElement, "mouseenter", () => {
      this.renderer.setStyle(this.elRef.nativeElement, "color", "blue");
      this.renderer.setStyle(this.elRef.nativeElement, "font-weight", "bold");
    });
    this.renderer.listen(this.elRef.nativeElement, "mouseleave", () => {
      this.renderer.setStyle(this.elRef.nativeElement, "color", "");
      this.renderer.setStyle(this.elRef.nativeElement, "font-weight", "");
    });
  }
}
