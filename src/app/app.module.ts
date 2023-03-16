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
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { ColumnsComponent } from './columns/columns.component';
import { TableComponent } from './table/table.component';

declare module 'googlemaps';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


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
    NotifierModule.withConfig(customNotifierOptions)

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
