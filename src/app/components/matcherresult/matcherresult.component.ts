import { Component,NgModule, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { NgFor, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BreedInfo } from '../../services/Breeds';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-matcherresult',
  standalone: true,
  imports: [
    MatCardModule,
    NgFor, 
    NgIf,
    RouterModule,
    SlickCarouselModule
  ],
  templateUrl: './matcherresult.component.html',
  styleUrl: './matcherresult.component.css'
})
export class MatcherResultComponent {
  selectedSkinType: string = '';

  constructor(private breedService: BreedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedSkinType = this.route.snapshot.params['selectedSkinType'];   
  }

    oilyDogs: BreedInfo[] = this.breedService.getOily();
  dryDogs: BreedInfo[] = this.breedService.getDry();
  comboDogs: BreedInfo[] = this.breedService.getCombo();
  sensitiveDogs: BreedInfo[] = this.breedService.getSensitive();
  
  getSkinTypeMatch(selectedSkinType: string): BreedInfo[] {
    switch (selectedSkinType) {
      case "oily":
        return this.oilyDogs;
      case "dry":
        return this.dryDogs;
      case "combination":
        return this.comboDogs;
      case "sensitive":
        return this.sensitiveDogs;
      default:
        return [];
    }
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
  };

}
