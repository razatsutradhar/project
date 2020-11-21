import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAccountPagePageRoutingModule } from './new-account-page-routing.module';

import { NewAccountPagePage } from './new-account-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAccountPagePageRoutingModule
  ],
  declarations: [NewAccountPagePage]
})
export class NewAccountPagePageModule {}
