import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogdetailsComponent } from './dogdetails.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'

describe('DogdetailsComponent', () => {
  let component: DogdetailsComponent;
  let fixture: ComponentFixture<DogdetailsComponent>;

  const setupTest = (dogId) => {
    TestBed.configureTestingModule({
      imports: [
        DogdetailsComponent
      ],
      providers: [
        { provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              params: {
                dogId: dogId
              }
            }
          } 
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should create', () => {
    setupTest(45)
    expect(component).toBeTruthy();
    expect(component.dogId).toEqual(45)
  });
});
