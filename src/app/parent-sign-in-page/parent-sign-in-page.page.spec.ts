import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentSignInPagePage } from './parent-sign-in-page.page';

describe('ParentSignInPagePage', () => {
  let component: ParentSignInPagePage;
  let fixture: ComponentFixture<ParentSignInPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSignInPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentSignInPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
