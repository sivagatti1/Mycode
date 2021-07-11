import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicsComponent } from './electronics.component';
import { MitvsComponent } from './mitvs/mitvs.component';
import { MiphonesComponent } from './miphones/miphones.component';
import { SharedModule } from '../Shared/shared/shared.module';
import { LaptopsComponent } from './laptops/laptops.component';


@NgModule({
  declarations: [
    ElectronicsComponent,
    MitvsComponent,
    MiphonesComponent,
    LaptopsComponent
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    SharedModule
  ]
})
export class ElectronicsModule { }
