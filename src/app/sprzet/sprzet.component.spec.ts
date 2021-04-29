import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetComponent } from './sprzet.component';

describe('SprzetComponent', () => {
  let component: SprzetComponent;
  let fixture: ComponentFixture<SprzetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprzetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
