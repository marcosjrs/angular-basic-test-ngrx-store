import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hoverCard]',
  standalone: true,
})
export class HoverCardDirective {
  renderer = inject(Renderer2);
  elementRef = inject(ElementRef);
  initialFontWeight = '';

  @HostListener('mouseover')
  onOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', 'bold');
  }
  @HostListener('mouseout')
  onOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.initialFontWeight);
  }

  ngOnInit() {
    this.initialFontWeight = this.elementRef.nativeElement.style.fontWeight ?? '';
  }
}
