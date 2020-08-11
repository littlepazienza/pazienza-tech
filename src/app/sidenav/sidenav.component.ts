import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  open = false;
  email = 'pazienza.log@gmail.com';
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  toggle($event: MouseEvent) {
    const nav = document.getElementById('side-nav');
    const burger = document.getElementById('hamburger');
    if (!this.open) {
      nav.style.animationDuration = '0.2s';
      nav.classList.add('animate__animated', 'animate__pulse');
      burger.classList.remove('rotate-in');
      burger.classList.add('rotate-out');
      nav.style.width = '300px';
    } else {
      nav.classList.remove('animate__animated', 'animate__pulse');
      burger.classList.remove('rotate-out');
      burger.classList.add('rotate-in');
      nav.style.width = '100px';
    }

    this.open = !this.open;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ClipboardComponent, {
      duration: 3 * 1000,
      horizontalPosition: 'left',
      politeness: 'assertive'
    });
  }

}

@Component({
  selector: 'clipboard',
  template: '<span>Copied <strong>pazienza.log@gmail.com</strong> to clipboard!</span>',
})
export class ClipboardComponent {
}

