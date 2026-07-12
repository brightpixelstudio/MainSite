import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samplebanner } from './samplebanner';

describe('Samplebanner', () => {
  let component: Samplebanner;
  let fixture: ComponentFixture<Samplebanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Samplebanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Samplebanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
