import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheriqueComponent } from './peripherique.component';

describe('PeripheriqueComponent', () => {
  let component: PeripheriqueComponent;
  let fixture: ComponentFixture<PeripheriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
