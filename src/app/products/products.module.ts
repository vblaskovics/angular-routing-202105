import { NgModule } from "@angular/core";
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'more-info', component: MoreInfoComponent},
    { path: ':id', component: ProductComponent},
]

@NgModule({
    declarations: [
    ProductComponent,
    MainComponent,
    MoreInfoComponent
  ],
    imports: [],
    exports: []
})
export class ProductsModule { }