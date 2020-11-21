import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildTabsPage } from './child-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ChildTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildTabsPageRoutingModule {}
