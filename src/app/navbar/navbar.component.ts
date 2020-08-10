import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor() { }
  scrollTo(section) {
    const elem = document.querySelector('#' + section);
    elem.scrollIntoView( {block: 'end', behavior: 'smooth' });
    elem.parentElement.classList.add('active');
  }
  ngOnInit(): void {
  }
}
