import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture.component';
import { BedsComponent } from './beds/beds.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
const routes: Routes = [{ path: 'beds', component: BedsComponent },
{ path: 'chairs', component: ChairsComponent },
{ path: 'tables', component: TablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }
