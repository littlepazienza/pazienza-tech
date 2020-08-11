import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.onscroll = () => {
      const nav = document.getElementById('page-nav');
      if (document.scrollingElement.scrollTop < 50 && !nav.classList.contains('landing-grow')) {
        nav.classList.remove('landing-shrink');
        nav.classList.add('landing-grow');
      } else if (document.scrollingElement.scrollTop > 50 && !nav.classList.contains('landing-shrink')) {
        nav.classList.remove('landing-grow');
        nav.classList.add('landing-shrink');
      }
    };
  }

}
