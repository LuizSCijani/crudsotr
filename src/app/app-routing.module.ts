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
    path: 'formprod',
    loadChildren: () => import('./pages/formprod/formprod.module').then( m => m.FormprodPageModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./pages/lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },  {
    path: 'saida',
    loadChildren: () => import('./pages/saida/saida.module').then( m => m.SaidaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
