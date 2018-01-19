import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSetContainerComponent } from './banner-set-container.component';

describe('BannerSetContainerComponent', () => {
  let component: BannerSetContainerComponent;
  let fixture: ComponentFixture<BannerSetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
