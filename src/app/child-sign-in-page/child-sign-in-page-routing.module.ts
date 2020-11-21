import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildSignInPagePage } from './child-sign-in-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChildSignInPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildSignInPagePageRoutingModule {}
