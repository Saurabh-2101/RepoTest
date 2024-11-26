import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PripolicyComponent } from './pripolicy.component';

describe('PripolicyComponent', () => {
  let component: PripolicyComponent;
  let fixture: ComponentFixture<PripolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PripolicyComponent]
    });
    fixture = TestBed.createComponent(PripolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
