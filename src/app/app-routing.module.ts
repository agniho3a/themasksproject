import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OrderComponent } from './components/order/order.component';
import {OrderSummaryComponent} from './components/order-summary/order-summary.component';


const routes: Routes = [
  { path: "", component: OrderComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "order", component: OrderComponent },
  { path: "summary", component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
