import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAccountPagePage } from './new-account-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewAccountPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAccountPagePageRoutingModule {}
