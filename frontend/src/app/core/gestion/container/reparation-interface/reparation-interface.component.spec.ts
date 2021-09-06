import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationInterfaceComponent } from './reparation-interface.component';

describe('ReparationInterfaceComponent', () => {
  let component: ReparationInterfaceComponent;
  let fixture: ComponentFixture<ReparationInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
