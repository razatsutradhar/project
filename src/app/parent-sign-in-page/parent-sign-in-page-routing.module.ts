import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentSignInPagePage } from './parent-sign-in-page.page';

const routes: Routes = [
  {
    path: '',
    component: ParentSignInPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentSignInPagePageRoutingModule {}
