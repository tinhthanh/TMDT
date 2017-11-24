import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html'
})
export class HomeLayoutComponent  {
  public navIsFixed = false;
    constructor( @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 1100) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  //  console.log(this.navIsFixed +  ' -'  + number)
  }
//   ngOnInit() {
//     window.addEventListener('scroll', this.scroll, true);
// }

// ngOnDestroy() {
//     window.removeEventListener('scroll', this.scroll, true);
// }

// scroll = (): void => {
//   //handle your scroll here
//   //notice the 'odd' function assignment to a class field
//   //this is used to be able to remove the event listener
// };

public scrollTop() {
  window.scrollTo(0, 0);
}
 }
