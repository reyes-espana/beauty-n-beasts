import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogfinderComponent } from './dogfinder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DogfinderComponent', () => {
  let component: DogfinderComponent;
  let fixture: ComponentFixture<DogfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DogfinderComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
