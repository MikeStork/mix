import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezentacjaComponent } from './prezentacja.component';

describe('PrezentacjaComponent', () => {
  let component: PrezentacjaComponent;
  let fixture: ComponentFixture<PrezentacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrezentacjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezentacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
