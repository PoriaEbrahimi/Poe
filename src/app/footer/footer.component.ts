import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialMediaArray: String[] = [
    "https://github.com/PoriaEbrahimi",
    "mailto:poria.ebrahimi123@gmail.com",
    "https://www.linkedin.com/in/poria-ebrahimi/"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  randomSocialMedia = () => {
    var pos = Math.floor(Math.random() * 3);
    return this.socialMediaArray[pos]
  }

}
