import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('startStop', { static: true })
  startStop!: ElementRef<SVGStopElement>;

  contractionStarted = false;
  onLightClick(event: MouseEvent) {
    console.log('Center button clicked');
    this.contractionStarted = !this.contractionStarted;
    if (this.contractionStarted) {
      // Start the SVG animation
      const animateElem = this.startStop.nativeElement.querySelector('animate');
      if (animateElem && typeof animateElem.beginElement === 'function') {
        animateElem.beginElement();
      }
    }
  }
}
