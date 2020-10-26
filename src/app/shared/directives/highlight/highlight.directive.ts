import {Directive, ElementRef, Input, OnInit} from "@angular/core";
import {element} from "protractor";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private element: ElementRef) {}
  @Input() backgroundColor: string;
  @Input() color: string;
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = this.color;
  }
}
