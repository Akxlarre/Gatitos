import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listgatitos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listgatitos',
    loadChildren: () => import('./gatitos/listgatitos/listgatitos.module').then( m => m.ListgatitosPageModule)
  },
  {
    path: 'addgatito',
    loadChildren: () => import('./gatitos/addgatito/addgatito.module').then( m => m.AddgatitoPageModule)
  },
  {
    path: 'updategatito',
    loadChildren: () => import('./gatitos/updategatito/updategatito.module').then( m => m.UpdategatitoPageModule)
  },
  {
    path: 'detailgatito',
    loadChildren: () => import('./gatitos/detailgatito/detailgatito.module').then( m => m.DetailgatitoPageModule)
  },
  {
    path: 'deletegatito',
    loadChildren: () => import('./gatitos/deletegatito/deletegatito.module').then( m => m.DeletegatitoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
