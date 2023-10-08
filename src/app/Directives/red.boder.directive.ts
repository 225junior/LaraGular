import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
selector: '[appRedBorder]'
})
export class RedBorderDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.border = '1px solid red';
  }
}
