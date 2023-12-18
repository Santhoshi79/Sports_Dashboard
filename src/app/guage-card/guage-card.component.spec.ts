import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuageCardComponent } from './guage-card.component';

describe('GuageCardComponent', () => {
  let component: GuageCardComponent;
  let fixture: ComponentFixture<GuageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
