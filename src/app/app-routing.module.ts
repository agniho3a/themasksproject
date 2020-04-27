import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  { path: "", component: OrderComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "order", component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
