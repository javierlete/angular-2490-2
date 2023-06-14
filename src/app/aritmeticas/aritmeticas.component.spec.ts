import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritmeticasComponent } from './aritmeticas.component';

describe('AritmeticasComponent', () => {
  let component: AritmeticasComponent;
  let fixture: ComponentFixture<AritmeticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AritmeticasComponent]
    });
    fixture = TestBed.createComponent(AritmeticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
