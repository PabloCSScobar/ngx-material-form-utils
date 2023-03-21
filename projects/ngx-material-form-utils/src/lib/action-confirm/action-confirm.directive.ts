import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
  selector: "[mfuActionConfirm]",
  standalone: true
})
export class MfuActionConfirmDirective {
  private readonly elementRef = inject(ElementRef);
  
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    if (confirm('Are you sure?')) {
      console.log('Confirmed');
      return;
    } else {
      console.log('Cancelled');
      event.stopPropagation();
    }
  }
}