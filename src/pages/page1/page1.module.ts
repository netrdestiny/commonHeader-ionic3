import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page1Page } from './page1';

import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    Page1Page,
  ],
  imports: [
    IonicPageModule.forChild(Page1Page),
    ComponentsModule
  ],
})
export class Page1PageModule {}
