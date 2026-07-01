import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getstartedbanner } from './getstartedbanner';

describe('Getstartedbanner', () => {
  let component: Getstartedbanner;
  let fixture: ComponentFixture<Getstartedbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getstartedbanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Getstartedbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
