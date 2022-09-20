import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  @Input('color') inputColor:string;

  constructor(private element: ElementRef) {
    this.inputColor = 'red';
    element.nativeElement.style.backgroundColor = this.inputColor;
  }

}
