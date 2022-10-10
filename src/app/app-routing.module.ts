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



const routes: Routes = [
  {path:"", redirectTo: '/LoginComponent', pathMatch:'full'},
  {path:"CardviewComponent",component:CardviewComponent},
  {path:"ListviewComponent",component:ListviewComponent},
  {path:"test-view",component:TestComponent},
  {path:"MapviewComponent", component:MapviewComponent},
  {path:"LoginComponent", component:LoginComponent},
  {path:"DetailsComponent",
  component:DetailsComponent, 
  children: [
    {path: "overview", component: ListviewComponent},
    {path: "contact", component: CardviewComponent}
  ]
},
  // {path:"DetailsComponent/:id",component:DetailsComponent},
  {path: "OrdersComponent", component:OrdersComponent},
  {path: "NewCustomer", component:NewCustomerComponent},
  {path: "customerdata", component:CustomersdataComponent},
  // {path: "NewCustomer", component:NewCustomerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
