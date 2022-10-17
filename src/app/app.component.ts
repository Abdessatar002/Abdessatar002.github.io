import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mas_front';

  slidesOfCups = [
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


  slidesOfPalmares = [
    { img: 'assets/img/hh2-e1662895406926.png', story: 'Sur la scène africaine, le club a hissé haut le drapeau de notre pays en 2011 en remportant le triplé ; Coupe du Trône, Coupe de la CAF et Supercoupe africaine viendront étoffer en 100 jours le palmarès déjà glorieux du MAS, et recevra deux lettres de félicitations de la part de Sa Majesté le Roi Mohammed 6 que Dieu l’assiste.' },
    { img: 'assets/img/HH5-1-e1662897177433.jpeg', story: 'Au niveau national, le MAS a toujours honoré Fès, en remportant le titre de champion du Maroc à quatre reprises, une première en 1965, puis en 1979, 1983 et une dernière fois en 1985, il terminera dauphin à sept reprises. Le MAS a également une heureuse histoire avec la Coupe du Trône en la remportant quatre fois, 1980, 1988, 2011 et la dernière en 2016 dans nos chères provinces du Sud, à Laâyoune.' },
    { img: 'assets/img/HH4-2-e1662896878435.png', story: 'Ce grand club, avec ses millions de fans fidèles, et toutes ses composantes dirigeants adhérents et ville seront toujours mobilisés derrière cet emblème pour plus de titres et célébrations.' },
    { img: 'assets/img/HH1.jpeg', story: 'Plusieurs légendes ont enfilé le maillot du MAS. Les nôtres étaient héroïques en 1976 ;feu Hamid Hezzaz, Redouane el Guezzar, Tazi Abdellah et Abdelali Zeharoui, ils offriront à notre nation son unique coupe d’Afrique.' }
  ];

  slideConfigOfPalmares = {
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    "dots": true,
    infinite: true,
  };


  slidesOfPublic = [
    { img: 'assets/img/img-mas-public/cre1.png' },
    { img: 'assets/img/img-mas-public/cre1234.png' },
    { img: 'assets/img/img-mas-public/cre12345.png' },
    { img: 'assets/img/img-mas-public/cre123456.png' },
    { img: 'assets/img/img-mas-public/cre12345678.png' },
    { img: 'assets/img/img-mas-public/cre123456789.png' },
    { img: 'assets/img/img-mas-public/IMG_1696-1-scaled.jpg' },
    { img: 'assets/img/img-mas-public/IMG_6882-scaled.jpg' },
    { img: 'assets/img/img-mas-public/IMG_7030-scaled.jpg' },
  ];

  slideConfigOfPublic = {
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    "dots": true,
    infinite: true,
  };

  public onMobileNavToggle(_event: any) {
    const mainNavElement = document.getElementById('main-nav');
    const mobileNavToggleElement = document.getElementById('mobile-nav-toggle');
    const mainNav = document.querySelector('#main-nav');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const visibility = mainNav?.getAttribute('data-visible');

    if (visibility === "false") {
      mainNav?.setAttribute('data-visible', 'true');
      navToggle?.setAttribute('aria-expanded', 'true');

    } else {
      mainNav?.setAttribute('data-visible', 'false');
      navToggle?.setAttribute('aria-expanded', 'false');

    }

    window.onclick = function ($event) {
      console.log($event.target);

      if ($event.target != mainNavElement && mobileNavToggleElement != $event.target) {
        mainNav?.setAttribute('data-visible', 'false');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    };






  }

  clickOutSide() {


  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
