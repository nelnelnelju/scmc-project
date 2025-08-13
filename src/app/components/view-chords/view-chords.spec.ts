import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChords } from './view-chords';

describe('ViewChords', () => {
  let component: ViewChords;
  let fixture: ComponentFixture<ViewChords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
