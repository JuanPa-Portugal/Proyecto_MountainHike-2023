import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSesionComponent } from './inicia-sesion.component';

describe('IniciaSecionComponent', () => {
  let component: IniciaSesionComponent;
  let fixture: ComponentFixture<IniciaSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
