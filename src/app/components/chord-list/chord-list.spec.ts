import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordList } from './chord-list';

describe('ChordList', () => {
  let component: ChordList;
  let fixture: ComponentFixture<ChordList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChordList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
