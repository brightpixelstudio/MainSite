import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quotebanner } from './quotebanner';

describe('Quotebanner', () => {
  let component: Quotebanner;
  let fixture: ComponentFixture<Quotebanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quotebanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Quotebanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
