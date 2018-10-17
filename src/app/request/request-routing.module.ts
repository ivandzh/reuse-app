import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestComponent } from './request/request.component';
import { RequestItemComponent } from './request-item/request-item.component';
// import { CrisisCenterComponent }     from './crisis-center/crisis-center.component';
// import { CrisisDetailComponent }     from './crisis-detail/crisis-detail.component';

const requestRoutes: Routes = [
  {
    path: 'request',
    component: RequestComponent,
    children: [
      {
        path: 'item',
        component: RequestItemComponent,
        // children: [
        //   {
        //     path: ':id',
        //     // component: CrisisDetailComponent
        //   },
        //   {
        //     path: '',
        //     // component: CrisisCenterHomeComponent
        //   }
        // ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(requestRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RequestRoutingModule { }