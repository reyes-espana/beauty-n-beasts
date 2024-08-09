import { Component,NgModule, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

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
  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breedService.getOily();
    this.breedService.getDry();
    this.breedService.getCombo();
    this.breedService.getSensitive();    
  }

  selectedSkinType: string = '';


  onSkinTypeSelected(skinType: string){
    this.selectedSkinType = skinType
  }
}
