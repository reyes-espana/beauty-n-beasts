import { Component,NgModule, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BreedInfo } from '../../services/Breeds';

@Component({
  selector: 'app-matcherresult',
  standalone: true,
  imports: [
    MatCardModule,
    NgFor, 
    RouterModule,
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
  
//   constructor(private breedService: BreedService, private  route: ActivatedRoute) {}
//   selectedSkinType: string = this.route.snapshot.params['selectedSkinType'];
  
// getSkinTypeMatch(selectedSkinType: string)BreedInfo[]{
//   if(selectedSkinType === "oily"){
//     return this.oilyDogs;
//   }
//   if(selectedSkinType === "dry"){
//     return this.dryDogs;
//   }
//   if(selectedSkinType === "combination"){
//     return this.comboDogs
//   }
//   if(selectedSkinType === "sensitive"){
//     return this.sensitiveDogs;
//   }
//   return [];
// }


  // ngOnInit() {
  //   this.breedService.getOily();
  //   this.breedService.getDry();
  //   this.breedService.getCombo();
  //   this.breedService.getSensitive();    
  // }



  // onSkinTypeSelected(skinType: string){
  //   this.selectedSkinType = skinType
  // }
}
