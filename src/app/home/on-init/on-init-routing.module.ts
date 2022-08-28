import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnInitPage } from './on-init.page';

const routes: Routes = [
  {
    path: '',
    component: OnInitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnInitPageRoutingModule {}
