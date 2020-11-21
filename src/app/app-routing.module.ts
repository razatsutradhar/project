import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parent-sign-in-page',
    loadChildren: () => import('./parent-sign-in-page/parent-sign-in-page.module').then( m => m.ParentSignInPagePageModule)
  },
  {
    path: 'child-sign-in-page',
    loadChildren: () => import('./child-sign-in-page/child-sign-in-page.module').then( m => m.ChildSignInPagePageModule)
  },
  {
    path: 'new-account-page',
    loadChildren: () => import('./new-account-page/new-account-page.module').then( m => m.NewAccountPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
