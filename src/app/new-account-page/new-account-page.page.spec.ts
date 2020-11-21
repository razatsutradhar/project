import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAccountPagePage } from './new-account-page.page';

describe('NewAccountPagePage', () => {
  let component: NewAccountPagePage;
  let fixture: ComponentFixture<NewAccountPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAccountPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
