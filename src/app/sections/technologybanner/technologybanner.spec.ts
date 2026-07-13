import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technologybanner } from './technologybanner';

describe('Technologybanner', () => {
  let component: Technologybanner;
  let fixture: ComponentFixture<Technologybanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technologybanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Technologybanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
