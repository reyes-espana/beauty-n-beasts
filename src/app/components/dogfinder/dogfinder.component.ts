import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { BreedService } from '../../services/breeds.service';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import * as dogsData from '../../utils/dogs.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BreedInfo, Breed } from '../../services/Breeds';
import { RouterLink } from '@angular/router';


@Component({
 selector: 'app-dogfinder',
 standalone: true,
 imports: [
  MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIconButton,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    RouterLink,
 ],
 templateUrl: './dogfinder.component.html',
 styleUrl: './dogfinder.component.css'
})
export class DogfinderComponent {

  public dogsjson = JSON.parse(JSON.stringify(dogsData));
 //allDogs: Breed[] = this.breedService.getAllDogBreeds();
 isTyping = false;
 searchText: string = "";

 ngOnInit() {
  // this.filteredDogs = this.dogsjson;
//this.search(this.searchText)
this.search("")
 }
 search(searchText: string) {
  let allBreeds: Breed[] = [];
  const lowerCaseSearchTerm = searchText.toLowerCase();
  for (let i = 0; i < this.dogsjson.default.length; i++) {
    if (this.dogsjson.default[i].name.toLowerCase().includes(lowerCaseSearchTerm)){
    allBreeds.push({
             name: this.dogsjson.default[i].name,
             index: i,
             image: this.dogsjson.default[i].image_link
            });
    }
  };
  console.log(allBreeds)
  return allBreeds
}
}
