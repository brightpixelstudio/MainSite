import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesbanner } from './servicesbanner';

describe('Servicesbanner', () => {
  let component: Servicesbanner;
  let fixture: ComponentFixture<Servicesbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesbanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Servicesbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
