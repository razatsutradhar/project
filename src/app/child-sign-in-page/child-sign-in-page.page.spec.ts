import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildSignInPagePage } from './child-sign-in-page.page';

describe('ChildSignInPagePage', () => {
  let component: ChildSignInPagePage;
  let fixture: ComponentFixture<ChildSignInPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSignInPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildSignInPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
