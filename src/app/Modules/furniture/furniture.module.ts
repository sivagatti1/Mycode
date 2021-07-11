import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureComponent } from './furniture.component';
import { BedsComponent } from './beds/beds.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
import { SharedModule } from '../Shared/shared/shared.module';


@NgModule({
  declarations: [
    FurnitureComponent,
    BedsComponent,
    ChairsComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    SharedModule
  ]
})
export class FurnitureModule { }
