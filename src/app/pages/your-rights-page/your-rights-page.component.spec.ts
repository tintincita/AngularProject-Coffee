import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourRightsPageComponent } from './your-rights-page.component';

describe('YourRightsPageComponent', () => {
  let component: YourRightsPageComponent;
  let fixture: ComponentFixture<YourRightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourRightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourRightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
