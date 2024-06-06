import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZilchComponent } from './zilch.component';

describe('ZilchComponent', () => {
  let component: ZilchComponent;
  let fixture: ComponentFixture<ZilchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZilchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZilchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
