import {AfterViewInit, Component, OnInit} from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  open = false;
  email = 'pazienza.log@gmail.com';
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.showTutorial();
  }

  showTutorial() {
    const cookie = this.getCookie('showTutorial');
    if (cookie === null) {
      this.setCookie('showTutorial', 'F', 365);
      const tutorial = document.getElementById('tutorial');
      const github = document.getElementById('github-icon');
      const linked = document.getElementById('linkedin-icon');
      const insta = document.getElementById('instagram-icon');
      const email = document.getElementById('email-icon');
      tutorial.classList.remove('d-none');
      github.classList.add('d-none');
      linked.classList.add('d-none');
      insta.classList.add('d-none');
      email.classList.add('d-none');
      setTimeout(() => {
        this.navOut();
        // this.setCookie('showTutorial', 'F', 365);
        setTimeout(() => {
          tutorial.classList.add('d-none');
          setTimeout(() => {
            // github.hidden = false;
            github.classList.remove('d-none');
            setTimeout(() => {
              // insta.hidden = false;
              insta.classList.remove('d-none');
              setTimeout(() => {
                // linked.hidden = false;
                linked.classList.remove('d-none');
                setTimeout(() => {
                  // email.hidden = false;
                  email.classList.remove('d-none');
                  setTimeout(() => {
                    this.navIn();
                  }, 2000);
                }, 450);
              }, 1000);
            }, 300);
          }, 600);
        }, 4000);
      }, 3000);
    }
  }

  toggle($event: MouseEvent) {
    if (!this.open) {
      this.navOut();
    } else {
      this.navIn();
    }
    this.open = !this.open;
  }
  navOut() {
    const nav = document.getElementById('side-nav');
    const burger = document.getElementById('hamburger');
    nav.style.animationDuration = '3s';
    nav.classList.add('animate__animated', 'animate__pulse');
    burger.classList.remove('rotate-in');
    burger.classList.add('rotate-out');
    nav.style.width = '300px';
  }
  navIn() {
    const nav = document.getElementById('side-nav');
    const burger = document.getElementById('hamburger');
    nav.classList.remove('animate__animated', 'animate__pulse');
    burger.classList.remove('rotate-out');
    burger.classList.add('rotate-in');
    nav.style.width = '100px';
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ClipboardComponent, {
      duration: 3 * 1000,
      horizontalPosition: 'left',
      politeness: 'assertive'
    });
  }

  setCookie(name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    let cookie = `${name}=${encodeURIComponent(value)}`;

    if ('number' === typeof daysToLive) {
      /* Sets the max-age attribute so that the cookie expires
      after the specified number of days */
      cookie += `; max-age=${daysToLive * 24 * 60 * 60}`;

      document.cookie = cookie;
    }
  }

  getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(';');

    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');

      /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
      if (name === cookiePair[0].trim()) {
        // Decode the cookie value and return
        return decodeURIComponent(cookiePair[1]);
      }
    }

    // Return null if not found
    return null;
  }

}

@Component({
  selector: 'clipboard',
  template: '<span>Copied <strong>pazienza.log@gmail.com</strong> to clipboard!</span>',
})
export class ClipboardComponent {
}


