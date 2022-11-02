import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly imagesFeatured = [
    '/assets/sloth.png',
    '/assets/sloth.png',
    '/assets/sloth.png',
    '/assets/sloth.png',
    '/assets/sloth.png',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
