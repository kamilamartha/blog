import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominiosComponent } from './dominios.component';

describe('DominiosComponent', () => {
  let component: DominiosComponent;
  let fixture: ComponentFixture<DominiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DominiosComponent]
    });
    fixture = TestBed.createComponent(DominiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
