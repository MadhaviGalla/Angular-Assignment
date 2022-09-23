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
import { FormsModule }   from '@angular/forms';
import { DetailsComponent } from './details/details.component';





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
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,HttpClientModule, NgbModule,
   
    NgxPaginationModule,
    FormsModule
  
  ],
  providers: [ ServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
