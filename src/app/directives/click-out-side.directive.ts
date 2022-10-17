import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Output, EventEmitter, OnDestroy } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective implements AfterViewInit, OnDestroy {
  @Output() appClickOutSide = new EventEmitter<void>()

  documentClickSubscription: Subscription | undefined;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) { }


  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click').pipe(filter((event) => {
      console.log(!this.isInside(event.target as HTMLElement));

      return !this.isInside(event.target as HTMLElement);
    })).subscribe(() => {
      this.appClickOutSide.emit();
    })

  }


  isInside(element: HTMLElement): boolean {
    return element === this.element.nativeElement
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

}
