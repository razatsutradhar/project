import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentSignInPagePageRoutingModule } from './parent-sign-in-page-routing.module';

import { ParentSignInPagePage } from './parent-sign-in-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentSignInPagePageRoutingModule
  ],
  declarations: [ParentSignInPagePage]
})
export class ParentSignInPagePageModule {}
