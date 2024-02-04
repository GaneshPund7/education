import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaIQComponent } from './java-iq.component';

describe('JavaIQComponent', () => {
  let component: JavaIQComponent;
  let fixture: ComponentFixture<JavaIQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaIQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaIQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
