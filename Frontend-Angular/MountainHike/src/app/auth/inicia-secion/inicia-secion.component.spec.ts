import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSecionComponent } from './inicia-secion.component';

describe('IniciaSecionComponent', () => {
  let component: IniciaSecionComponent;
  let fixture: ComponentFixture<IniciaSecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaSecionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
