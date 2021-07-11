import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:"cart",component:CartComponent},
  { path: '', loadChildren: () => import('./Modules/electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: 'furniture', loadChildren: () => import('./Modules/furniture/furniture.module').then(m => m.FurnitureModule) },
   { path: 'electronics', loadChildren: () => import('./Modules/electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: 'fashions', loadChildren: () => import('./Modules/fashions/fashions.module').then(m => m.FashionsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
