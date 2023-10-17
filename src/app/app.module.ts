import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateStyleComponent } from './inline-template-style/inline-template-style.component';
import { NoSpecComponent } from './no-spec/no-spec.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { InputValueComponent } from './input-value/input-value.component';
import { CounterExampleComponent } from './counter-example/counter-example.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { ChildComponent } from './child/child.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ProductsComponent } from './products/products.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarEngineComponent } from './car-engine/car-engine.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InlineTemplateComponent,
    InlineStyleComponent,
    InlineTemplateStyleComponent,
    NoSpecComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    InputValueComponent,
    CounterExampleComponent,
    TwoWayBindingComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent,
    NgForExampleComponent,
    ChildComponent,
    PipeExampleComponent,
    CustomPipe,
    ProductsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    HomeComponent,
    CarsComponent,
    CarDetailsComponent,
    SidebarComponent,
    CarEngineComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
