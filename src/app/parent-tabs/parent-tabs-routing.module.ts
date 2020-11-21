import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentTabsPage } from './parent-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ParentTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentTabsPageRoutingModule {}
