import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEAllNComponent } from './feall-n.component';

describe('FEAllNComponent', () => {
  let component: FEAllNComponent;
  let fixture: ComponentFixture<FEAllNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEAllNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FEAllNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
