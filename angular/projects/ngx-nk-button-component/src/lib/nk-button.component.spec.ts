import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NkButtonComponent } from './nk-button.component';

describe('NkButtonComponent', () => {
  let component: NkButtonComponent;
  let fixture: ComponentFixture<NkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NkButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
