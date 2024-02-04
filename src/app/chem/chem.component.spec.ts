import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemComponent } from './chem.component';

describe('ChemComponent', () => {
  let component: ChemComponent;
  let fixture: ComponentFixture<ChemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
