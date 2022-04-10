import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsViewedPage } from './news-viewed.page';

const routes: Routes = [
  {
    path: '',
    component: NewsViewedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsViewedPageRoutingModule {}
