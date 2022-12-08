import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTechnologiesComponent } from './latest-technologies.component';

describe('LatestTechnologiesComponent', () => {
  let component: LatestTechnologiesComponent;
  let fixture: ComponentFixture<LatestTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
