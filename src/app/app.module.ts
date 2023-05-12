import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersdataComponent } from './customersdata/customersdata.component';
import { CardviewComponent } from './cardview/cardview.component';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { ListviewComponent } from './listview/listview.component';
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';
import { MapviewComponent } from './mapview/mapview.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms'
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { ColumnsComponent } from './columns/columns.component';
import { TableComponent } from './table/table.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { Login2Component } from './login2/login2.component';
import { EventsComponent } from './events/events.component';
 import { SimpleNotificationsModule } from 'angular2-notifications';
 import * as echarts from 'echarts';
 import {NotificationComponent} from './notification/notification.component';
import { ChartsComponent } from './charts/charts.component' 
declare module 'googlemaps';

import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart/line-chart.component';



@NgModule({
  declarations: [
 
    AppComponent,
    TestComponent,
    CustomersdataComponent,
    CardviewComponent,
    SearchPipe,
    ListviewComponent,
    MapviewComponent,
    LoginComponent,
    DetailsComponent,
    OrdersComponent,
    HeaderComponent,
    NewCustomerComponent,
    ViewordersComponent,
    EditComponent,
    AboutComponent,
    NavComponent,
    DragndropComponent,
    ColumnsComponent,
    TableComponent,
    DynamicformComponent,
    Login2Component,
    EventsComponent,
    NotificationComponent,
    ChartsComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule, HttpClientModule, NgbModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatButtonModule, GoogleMapsModule, ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
