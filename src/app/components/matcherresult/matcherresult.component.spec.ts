import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatcherResultComponent } from './matcherresult.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'

describe('MatcherResultComponent', () => {
  let component: MatcherResultComponent;
  let fixture: ComponentFixture<MatcherResultComponent>;

  const setupTest = (skinType) => {
    TestBed.configureTestingModule({
      imports: [
        MatcherResultComponent
      ],
      providers: [
        { provide: ActivatedRoute, 
          useValue: { 
            snapshot: {
              params: {
                selectedSkinType: skinType
              }
            }
          } 
        },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcherResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should create with normal skin type', () => {
    setupTest('normal');
     expect(component.selectedSkinType).toBe('normal')
  });

  it('should create with dry skin type', () => {
    setupTest('dry');
    expect(component.selectedSkinType).toBe('dry')
  });

  it('should create with sensitive skin type', () => {
    setupTest('sensitive');
     expect(component.selectedSkinType).toBe('sensitive')
  });

  it('should create with combination skin type', () => {
    setupTest('combination');
     expect(component.selectedSkinType).toBe('combination')
  });

  it('should create with oily skin type', () => {
    setupTest('oily');
     expect(component.selectedSkinType).toBe('oily')
  });
});
