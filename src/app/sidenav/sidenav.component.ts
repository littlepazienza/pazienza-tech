import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    const nav = document.getElementById('side-nav');
    const nav_panel = document.getElementById('side-nav-panel');
    const hamburger = document.getElementById('hamburger');
    if (!this.open) {
      nav.style.animationDirection = '0.2s';
      nav.classList.add('animate__animated', 'animate__pulse');
      nav.style.width = '300px';
      hamburger.classList.add('is-active');
      nav_panel.style.backgroundPosition = 'left';
      // hamburger.hidden = false;
    } else {
      nav.classList.remove('animate__animated', 'animate__pulse');
      nav.style.width = '100px';
      hamburger.classList.remove('is-active');
      nav_panel.style.backgroundPosition = 'center';
      // hamburger.hidden = true;
    }
    this.open = !this.open;
  }

}
