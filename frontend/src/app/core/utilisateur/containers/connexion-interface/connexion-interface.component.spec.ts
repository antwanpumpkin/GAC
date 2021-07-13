import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionInterfaceComponent } from './connexion-interface.component';

describe('ConnexionInterfaceComponent', () => {
  let component: ConnexionInterfaceComponent;
  let fixture: ComponentFixture<ConnexionInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
