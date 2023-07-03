import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable, Type } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/pages/category/category.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  // rutas protegidas
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'employee', component: EmployeeComponent },

      { path: '', redirectTo: '/dashboard/', pathMatch: 'full' },
      // { path: '**', component: NotFoundComponent },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
