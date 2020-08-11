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

  toggle($event: MouseEvent) {
    const nav = document.getElementById('side-nav');
    if (!this.open) {
      nav.style.animationDirection = '0.2s';
      nav.classList.add('animate__animated', 'animate__pulse');
      nav.style.width = '300px';
    } else {
      nav.classList.remove('animate__animated', 'animate__pulse');
      nav.style.width = '100px';
    }
    this.open = !this.open;
  }

}
