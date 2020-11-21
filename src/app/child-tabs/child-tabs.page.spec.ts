import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildTabsPage } from './child-tabs.page';

describe('ChildTabsPage', () => {
  let component: ChildTabsPage;
  let fixture: ComponentFixture<ChildTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
