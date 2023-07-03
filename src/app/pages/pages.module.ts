import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { SupplierComponent } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
    declarations: [
        DashboardComponent,
        CategoryComponent,
        ProductComponent,
        PagesComponent,
        NotFoundComponent,
        PurchaseComponent,
        SupplierComponent,
        EmployeeComponent,
    ],
    exports: [
        DashboardComponent,
        CategoryComponent,
        ProductComponent,
        PagesComponent,
        NotFoundComponent,
        SharedModule,
        PurchaseComponent,
        SupplierComponent,
        EmployeeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        AppRoutingModule
    ]
})
export class PagesModule { }
