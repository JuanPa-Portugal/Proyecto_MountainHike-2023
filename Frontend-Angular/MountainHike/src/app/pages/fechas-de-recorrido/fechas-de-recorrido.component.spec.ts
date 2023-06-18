import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasDeRecorridoComponent } from './fechas-de-recorrido.component';

describe('FechasDeRecorridoComponent', () => {
  let component: FechasDeRecorridoComponent;
  let fixture: ComponentFixture<FechasDeRecorridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasDeRecorridoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechasDeRecorridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
