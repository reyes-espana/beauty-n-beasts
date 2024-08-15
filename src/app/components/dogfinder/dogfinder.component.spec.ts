import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogfinderComponent } from './dogfinder.component';

describe('DogfinderComponent', () => {
  let component: DogfinderComponent;
  let fixture: ComponentFixture<DogfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogfinderComponent ] // Include the component in declarations
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect initial changes
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogfinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for dogs based on the search text', () => {
    const mockDogsData = [
      { name: 'Labrador Retriever', image_link: "https://api-ninjas.com/images/dogs/labrador_retriever.jpg" }
    ];

    // Mock the dogsjson property
    spyOnProperty(component, 'dogsjson', 'get').and.returnValue({ default: mockDogsData });

    const searchTerm = 'lab';
    component.search(searchTerm);

    const expectedResults = [
      { name: 'Labrador Retriever', index: 267, image: 'https://api-ninjas.com/images/dogs/labrador_retriever.jpg' }
    ];

    expect(component.search(searchTerm)).toEqual(expectedResults);
  });


});
