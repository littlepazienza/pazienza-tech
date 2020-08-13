import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  scrollToContent($event) {
    document.getElementById('education').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

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
      const ind = document.getElementById('indicator');
      if (document.scrollingElement.scrollTop === 0) {
        ind.classList.remove('animate__animated', 'animate__fadeOutDown');
        ind.classList.add('animate__animated', 'animate__fadeInUp');
      } else {
        ind.classList.remove('animate__animated', 'animate__fadeInUp');
        ind.classList.add('animate__animated', 'animate__fadeOutDown');
      }
      const wes = document.getElementById('westford');
      const balt = document.getElementById('baltimore');
      if (document.scrollingElement.scrollTop <= 100) {
        wes.classList.remove('animate__animated', 'animate__fadeOutDown');
        wes.classList.add('animate__animated', 'animate__fadeInUp');
        balt.classList.remove('animate__animated', 'animate__fadeOutDown');
        balt.classList.add('animate__animated', 'animate__fadeInUp');
      } else {
        wes.classList.remove('animate__animated', 'animate__fadeInUp');
        wes.classList.add('animate__animated', 'animate__fadeOutDown');
        balt.classList.remove('animate__animated', 'animate__fadeInUp');
        balt.classList.add('animate__animated', 'animate__fadeOutDown');
      }

    };
  }

}
