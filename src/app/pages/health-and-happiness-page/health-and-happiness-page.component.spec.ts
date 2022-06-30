import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndHappinessPageComponent } from './health-and-happiness-page.component';

describe('HealthAndHappinessPageComponent', () => {
  let component: HealthAndHappinessPageComponent;
  let fixture: ComponentFixture<HealthAndHappinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthAndHappinessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAndHappinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
