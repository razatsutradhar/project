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
  {
    path: 'child-tabs',
    loadChildren: () => import('./child-tabs/child-tabs.module').then( m => m.ChildTabsPageModule)
  },
  {
    path: 'parent-tabs',
    loadChildren: () => import('./parent-tabs/parent-tabs.module').then( m => m.ParentTabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
