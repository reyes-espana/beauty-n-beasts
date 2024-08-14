import { Injectable } from '@angular/core';
import { BreedInfo, Breed } from './Breeds';

import * as dogs from '../utils/dogs.json';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  static getDog(index: number) {
    throw new Error('Method not implemented.');
  }
  private dogsjson = JSON.parse(JSON.stringify(dogs));

  getAllDogsInfo() {
    let allBreeds: BreedInfo[] = [];
    for (let i = 0; i < this.dogsjson.default.length; i++) {
      allBreeds.push(
        {
          image_link: this.dogsjson.default[i].image_link,
          good_with_children: this.dogsjson.default[i].good_with_children,
          good_with_other_dogs: this.dogsjson.default[i].good_with_other_dogs,
          shedding: this.dogsjson.default[i].shedding,
          coat_length: this.dogsjson.default[i].coat_length,
          trainability: this.dogsjson.default[i].trainability,
          barking: this.dogsjson.default[i].barking,
          min_life_expectancy: this.dogsjson.default[i].min_life_expectancy,
          max_life_expectancy: this.dogsjson.default[i].max_life_expectancy,
          max_height_male: this.dogsjson.default[i].max_height_male,
          max_height_female: this.dogsjson.default[i].max_height_female,
          max_weight_male: this.dogsjson.default[i].max_weight_male,
          max_weight_female: this.dogsjson.default[i].max_weight_female,
          min_height_male: this.dogsjson.default[i].min_height_male,
          min_height_female: this.dogsjson.default[i].min_height_female,
          min_weight_male: this.dogsjson.default[i].min_weight_male,
          min_weight_female: this.dogsjson.default[i].min_weight_female,
          grooming: this.dogsjson.default[i].grooming,
          drooling: this.dogsjson.default[i].drooling,
          good_with_strangers: this.dogsjson.default[i].good_with_strangers,
          playfulness: this.dogsjson.default[i].playfulness,
          protectiveness: this.dogsjson.default[i].protectiveness,
          energy: this.dogsjson.default[i].energy,
          name: this.dogsjson.default[i].name,
        })
    };
    return allBreeds;
  }

  getAllDogBreeds() {
    let allBreeds: Breed[] = [];
    for (let i = 0; i < this.dogsjson.default.length; i++) {
      allBreeds.push(
        {
          name: this.dogsjson.default[i].name,
          index: i,
          image: this.dogsjson.default[i].image_link
        }
      );
    };
    return allBreeds.sort((a: Breed, b: Breed) => a.name.localeCompare(b.name));
  }

  getDog(index: number) {
    const allDogs = this.getAllDogsInfo()
    return allDogs[index];
  }

  getOily(){
    let result = [];
    let array = this.getAllDogsInfo(); 
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding === 4 || array[i].shedding === 5 && array[i].drooling ===3){
        result.push(array[i]);
      };
    };
    return result;
  };

  getOily2(){
    let result = [];
    let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding <= 4 && array[i].drooling <= 3){
        result.push(result[i]);
      };
    };
  return result;
  };
    
    
  getDry(){
    let result = [];
    let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding === 2 && array[i].drooling ===4 || array[i].drooling === 5){
        result.push(array[i]);
      };
    };
    return result;
  };

  getDry2(){
    let result = [];
     let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding <= 2 && array[i].drooling <= 4){
        result.push(result[i]);
      };
    };

    return result;
    }

  getSensitive(){
    let result = [];
    let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding === 1 && array[i].drooling ===1){
        result.push(array[i]);
      };
    };
    return result;
  };

  getSensitive2(){
    let result = [];
     let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding <= 1 && array[i].drooling <= 1){
        result.push(result[i]);
      };
    };

    return result;
    }

  getCombo(){
    let result = [];
    let array = this.getAllDogsInfo();
    for(let i=0; i<array.length-1 ; i++){
      if(array[i].shedding === 3 && array[i].drooling ===2){
        result.push(array[i]);
      };
    };
    return result;
  };

  getCombo2(){
    let result = [];
     let array = this.getAllDogsInfo();
    for(let i=0; i< array.length-1 ; i++){
      if(array[i].shedding <= 3 && array[i].drooling <= 2){
        result.push(result[i]);
      };
    };
    return result;
  }
          
}
