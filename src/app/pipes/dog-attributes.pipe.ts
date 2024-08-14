import { Pipe, PipeTransform } from '@angular/core';
import { BreedInfo } from '../services/Breeds';

@Pipe({
  name: 'dogAttributes',
  standalone: true
})
export class DogAttributesPipe implements PipeTransform {

  transform(breedInfo: BreedInfo): string{
    const sheddingDescription = this.getSheddingDescription(breedInfo.shedding);
    const droolingDescription = this.getDroolingDescription(breedInfo.drooling);
    const groomingDescription = this.getGroomingDescription(breedInfo.grooming);
    const breed = breedInfo.name;

    return `${breed}s ${sheddingDescription}, require ${groomingDescription} grooming, and have a ${droolingDescription} drooling tendency.`;
  }

  private getSheddingDescription(shedding: number): string {
    if (shedding <= 2) {
      return 'shed minimally';
    } else if (shedding == 3) {
      return 'shed moderately';
    } else {
      return 'shed heavily';
    }
  };

  private getDroolingDescription(drooling: number): string {
    if (drooling <= 2) {
      return 'low';
    } else if (drooling == 3) {
      return 'moderate';
    } else {
      return 'high';
    }
  }

  private getGroomingDescription(grooming: number): String {
    if(grooming <= 2) {
      return 'minimal';
    } else if (grooming == 3) {
      return 'moderate';
    } else {
      return 'high-maintenence';
    }
  }
};
