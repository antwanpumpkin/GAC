import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInterfaceComponent } from './gestion-interface.component';

describe('GestionInterfaceComponent', () => {
  let component: GestionInterfaceComponent;
  let fixture: ComponentFixture<GestionInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
