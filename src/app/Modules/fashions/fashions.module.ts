import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionsRoutingModule } from './fashions-routing.module';
import { FashionsComponent } from './fashions.component';
import { SharedModule } from '../Shared/shared/shared.module';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';


@NgModule({
  declarations: [
    FashionsComponent,
    KidsComponent,
    MensComponent,
    WomensComponent
  ],
  imports: [
    CommonModule,
    FashionsRoutingModule,
    SharedModule
  ]
})
export class FashionsModule { }
