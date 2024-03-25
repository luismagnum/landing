import { Component, OnInit, inject, } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  productList: IProduct[]= []
  private _apiService = inject(ApiService);
  
  
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProduct[]) =>{
      this.productList = data;
    })
  }
}
