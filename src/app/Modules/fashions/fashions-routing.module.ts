import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionsComponent } from './fashions.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
const routes: Routes = [{ path: 'kids', component: KidsComponent },
{ path: 'mens', component: MensComponent },
{ path: 'womens', component: WomensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionsRoutingModule { }
