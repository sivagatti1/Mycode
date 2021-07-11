import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { MitvsComponent } from './mitvs/mitvs.component';
import { MiphonesComponent } from './miphones/miphones.component';
import { LaptopsComponent } from './laptops/laptops.component';
const routes: Routes = [{ path: 'tvs', component: MitvsComponent },
{ path: '', component: ElectronicsComponent },
{ path: 'phones', component: MiphonesComponent },
{ path: 'laptops', component: LaptopsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
