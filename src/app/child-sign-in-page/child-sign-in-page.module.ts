import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildSignInPagePageRoutingModule } from './child-sign-in-page-routing.module';

import { ChildSignInPagePage } from './child-sign-in-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildSignInPagePageRoutingModule
  ],
  declarations: [ChildSignInPagePage]
})
export class ChildSignInPagePageModule {}
