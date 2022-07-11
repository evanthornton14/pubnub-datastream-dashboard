import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiChangeListComponent } from './wiki-change-list.component';

describe('WikiChangeListComponent', () => {
  let component: WikiChangeListComponent;
  let fixture: ComponentFixture<WikiChangeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiChangeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiChangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
