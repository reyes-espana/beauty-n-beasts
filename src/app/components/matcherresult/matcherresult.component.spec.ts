import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherResultComponent } from './matcherresult.component';

describe('MatcherResultComponent', () => {
  let component: MatcherResultComponent;
  let fixture: ComponentFixture<MatcherResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcherResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcherResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
