import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleGameComponent } from './idle-game.component';

describe('IdleGameComponent', () => {
  let component: IdleGameComponent;
  let fixture: ComponentFixture<IdleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
