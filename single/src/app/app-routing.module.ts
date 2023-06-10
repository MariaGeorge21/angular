import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { UpdateComponent } from "./update/update.component";



const routes: Routes = [ 
  {path:'product-list',component:ProductListComponent},
  {path:'productdetails/:productId',component:ProductdetailsComponent},
  {path: 'create', component: CreateComponent},
  //{path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'update/:productId', component: UpdateComponent},
  {path:'',component:ProductListComponent}
  
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
