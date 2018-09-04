import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page2Page } from './page2';

import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    Page2Page,
  ],
  imports: [
    IonicPageModule.forChild(Page2Page),
    ComponentsModule
  ],
})
export class Page2PageModule {}
