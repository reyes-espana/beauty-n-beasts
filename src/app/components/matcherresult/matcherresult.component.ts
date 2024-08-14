import { Component,NgModule, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BreedInfo } from '../../services/Breeds';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DogAttributesPipe } from '../../pipes/dog-attributes.pipe';


@Component({
  selector: 'app-matcherresult',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    NgFor, 
    NgIf,
    RouterModule,
    SlickCarouselModule,
    DogAttributesPipe
  ],
  templateUrl: './matcherresult.component.html',
  styleUrl: './matcherresult.component.css'
})
export class MatcherResultComponent {
  selectedSkinType: string = '';
  showSecondTierMatches = false;

  onMoreMatchesClick() {
    this.showSecondTierMatches = true;
  }
  constructor(private breedService: BreedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedSkinType = this.route.snapshot.params['selectedSkinType'];   
  }

  oilyDogs: BreedInfo[] = this.breedService.getOily();
  dryDogs: BreedInfo[] = this.breedService.getDry();
  comboDogs: BreedInfo[] = this.breedService.getCombo();
  sensitiveDogs: BreedInfo[] = this.breedService.getSensitive();
  normalDogs: BreedInfo[] = this.breedService.getNormal();

  oilyDogs2: BreedInfo[] = this.breedService.getOily2();
  dryDogs2: BreedInfo[] = this.breedService.getDry2();
  comboDogs2: BreedInfo[] = this.breedService.getCombo2();
  sensitiveDogs2: BreedInfo[] = this.breedService.getSensitive2();
  
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
      case "normal":
        return this.normalDogs;
      default:
        return [];
    }
  }

  getSecondTier(selectedSkinType: string): BreedInfo[] {
    switch (selectedSkinType) {
      case "oily":
        return this.oilyDogs2;
      case "dry":
        return this.dryDogs2;
      case "combination":
        return this.comboDogs2;
      case "sensitive":
        return this.sensitiveDogs2;
      default:
        return [];
    }
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true
  };

}
