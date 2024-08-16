import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  slides = [
    {
      title: 'Our Story',
      content:
        'Beauty & Beasts was born in the innovative and fast-paced environment of our Google coding boot camp. As five aspiring developers - Courtlyn, Daniela, Jazmin, Zoe, and Sarai - we were tasked with creating a web application that would solve a real-world problem. Little did we know that our project would combine two seemingly unrelated passions: skincare and dogs. During one of our brainstorming sessions, as we were tossing around ideas, Daniela absent-mindedly mentioned how her dog always seemed to know when her skin was feeling particularly sensitive. This sparked an interesting discussion among us. Jazmin, Sarai, and Zoe, all skincare enthusiasts, started wondering if there could be a connection between dog ownership and skin health. Meanwhile, Courtlyn shared anecdotes about how her furry friends had impacted her daily routines, including their skincare habits. As we delved deeper into the idea, we realized we had stumbled upon a unique concept that could showcase our coding skills while also exploring a topic close to our hearts. Beauty & Beasts represents not just the culmination of our boot camp experience, but also a unique intersection of technology, skincare science, and the joy of canine companionship. While it began as a project to demonstrate our coding abilities, it has evolved into a platform that we believe can bring value to both skincare enthusiasts and dog lovers alike.',
    },
    {
        title: 'Meet the Team',
        teamMembers: [
          { name: 'Courtlyn', image: 'assets/cb.jpg' },
          { name: 'Daniela', image: 'assets/dr.jpg' },
          { name: 'Jazmin', image: 'assets/jt.jpg' },
          { name: 'Zoe', image: 'assets/zm.jpg' },
          { name: 'Sarai', image: 'assets/se.png' }
        ]
      },
    {
      title: 'Behind the Algorithm',
      content:
        'To match you with your future best friend we chose to prioritize a few factors that affect different skin types, including grooming, shedding, and drooling. Based on research from our in-house dermatologists and veterinarians, we learned that high shedding dogs can leave fur and dander around the home, which might contribute to dry skin irritation if not cleaned regularly. We also learned that drooling can add unwanted moisture to the skin, which might be helpful or irritating depending on how the skin reacts to extra moisture. And lastly regular and gentle grooming is essential to minimize skin irritation caused by loose fur and dander. Based on this information we scored the different skin types within these 3 categories as well as gave a cumulative score and found furry friends that matched these scores. ',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  };
  addSlide() {
    this.slides.push();
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
