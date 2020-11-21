import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentTabsPage } from './parent-tabs.page';

describe('ParentTabsPage', () => {
  let component: ParentTabsPage;
  let fixture: ComponentFixture<ParentTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
