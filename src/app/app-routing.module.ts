import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEngineComponent } from './car-engine/car-engine.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {
    path: 'sidebar',
    outlet: "sideBar",
    component: SidebarComponent
  },
  {path: 'footer', component: FooterComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'products', component: ProductsComponent},
  {
    path: 'car_details/:id',
    component: CarDetailsComponent,
    children: [
      {
        path:"car_engine",
        component: CarEngineComponent
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }