import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { TestComponent } from './test/test.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  {path:"CardviewComponent",component:CardviewComponent},
  {path:"ListviewComponent",component:ListviewComponent},
  {path:"test-view",component:TestComponent},
  {path:"MapviewComponent", component:MapviewComponent},
  {path:"LoginComponent", component:LoginComponent},
  {path:"DetailsComponent",component:DetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
