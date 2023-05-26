import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab0Page } from './tab0.page';

const routes: Routes = [
  {
    path: '',
    component: Tab0Page, // Route path for Tab0Page component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab0PageRoutingModule {}