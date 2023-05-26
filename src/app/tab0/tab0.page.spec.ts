import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab0Page } from './tab0.page';

describe('Tab0Page', () => {
  let component: Tab0Page;
  let fixture: ComponentFixture<Tab0Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab0Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});