import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutbanner } from './aboutbanner';

describe('Aboutbanner', () => {
  let component: Aboutbanner;
  let fixture: ComponentFixture<Aboutbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutbanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
