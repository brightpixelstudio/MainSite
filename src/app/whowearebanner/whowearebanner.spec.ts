import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whowearebanner } from './whowearebanner';

describe('Whowearebanner', () => {
  let component: Whowearebanner;
  let fixture: ComponentFixture<Whowearebanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whowearebanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Whowearebanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
