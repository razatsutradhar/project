import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentTabsPageRoutingModule } from './parent-tabs-routing.module';

import { ParentTabsPage } from './parent-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentTabsPageRoutingModule
  ],
  declarations: [ParentTabsPage]
})
export class ParentTabsPageModule {}
