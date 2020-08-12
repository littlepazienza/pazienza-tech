import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() bgSize: string;
  @Input() url: string;
  @Input() href: string;
  constructor() { }

  ngOnInit(): void {
  }

}
