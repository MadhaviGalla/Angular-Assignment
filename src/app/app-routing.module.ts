import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { TestComponent } from './test/test.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { OrdersComponent } from './orders/orders.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersdataComponent } from './customersdata/customersdata.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import {CactivateGuard} from './cactivate.guard';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';




const routes: Routes = [
  {path:"", redirectTo: '/LoginComponent', pathMatch:'full'},
  {path:"CardviewComponent",component:CardviewComponent, canActivate:[CactivateGuard]},
  {path:"ListviewComponent",component:ListviewComponent, canActivate:[CactivateGuard]},
  {path:"test-view",component:TestComponent, canActivate:[CactivateGuard]},
  {path:"MapviewComponent", component:MapviewComponent, canActivate:[CactivateGuard]},
  {path:"LoginComponent", component:LoginComponent},
  {path:"DetailsComponent/:id",component:DetailsComponent},
  {path: "OrdersComponent", component:OrdersComponent, canActivate:[CactivateGuard]},
  {path: "NewCustomer", component:NewCustomerComponent, canActivate:[CactivateGuard]},
  {path: "customerdata", component:CustomersdataComponent, canActivate:[CactivateGuard]},
  {path: "vieworders/:id", component:ViewordersComponent, canActivate:[CactivateGuard]},
  {path: "EditComponent/:id", component:EditComponent, canActivate:[CactivateGuard]},
  {path: "AboutComponent", component:AboutComponent, canActivate:[CactivateGuard]},
  {path: "nav", component:NavComponent},
  {path: "dragndrop", component:DragndropComponent},
  {path: "dynamicform", component:DynamicformComponent},
 
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 // children: [
  //   {path: "details", component: DetailsComponent},
  //   {path: "", redirectTo: "details", pathMatch: "full"},
  //   {path: "vieworders", component: ViewordersComponent},
  //   {path: "edit", component:EditComponent},
  // ]