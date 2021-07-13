import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationInterfaceComponent } from './creation-interface.component';

describe('CreationInterfaceComponent', () => {
  let component: CreationInterfaceComponent;
  let fixture: ComponentFixture<CreationInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
