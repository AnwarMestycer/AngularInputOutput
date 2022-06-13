import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeperipheriquesComponent } from './listeperipheriques.component';

describe('ListeperipheriquesComponent', () => {
  let component: ListeperipheriquesComponent;
  let fixture: ComponentFixture<ListeperipheriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeperipheriquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeperipheriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
