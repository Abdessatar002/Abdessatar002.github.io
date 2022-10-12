import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mas_front';
  slides = [
    { img: 'assets/img/botola.png' },
    { img: 'assets/img/coupe-confederation.png' },
    { img: 'assets/img/coupe-cuf.png' },
    { img: 'assets/img/coupe-du-trone.png' },
  ];
  slideConfig = {
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };


}
