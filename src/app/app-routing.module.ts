import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { SideNavComponent } from './side-nav/side-nav.component';
import { MakeRequestComponent } from './make-request/make-request.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemsComponent } from './view-items/view-items.component';
// import { RequestComponent } from './request/request/request.component';
import { RequestModule } from './request/request.module';

const appRoutes: Routes = [
  { 
    path: '', 
    component: SideNavComponent, 
    children: [
      { path: 'make-a-request', component: MakeRequestComponent,
        children: [
          { path: 'items', component: ItemsComponent },
          { path: 'add-item', component: AddItemComponent }
        ] },      
      { path: 'view-items', component: ViewItemsComponent },
      { path: 'request', component: RequestModule }
    ]
  }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}