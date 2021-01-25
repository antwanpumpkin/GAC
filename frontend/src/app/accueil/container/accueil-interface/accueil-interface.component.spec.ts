import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilInterfaceComponent } from './accueil-interface.component';

describe('AccueilInterfaceComponent', () => {
  let component: AccueilInterfaceComponent;
  let fixture: ComponentFixture<AccueilInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
