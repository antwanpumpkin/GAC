import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInterfaceComponent } from './profil-interface.component';

describe('ProfilInterfaceComponent', () => {
  let component: ProfilInterfaceComponent;
  let fixture: ComponentFixture<ProfilInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
