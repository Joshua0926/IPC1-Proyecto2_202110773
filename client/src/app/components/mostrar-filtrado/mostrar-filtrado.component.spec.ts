import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFiltradoComponent } from './mostrar-filtrado.component';

describe('MostrarFiltradoComponent', () => {
  let component: MostrarFiltradoComponent;
  let fixture: ComponentFixture<MostrarFiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarFiltradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
