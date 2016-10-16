import { Component, OnInit } from 'angular2/core';
import { IProduct} from './product';
import { ProductFilterPipe} from './product-filter.pipe';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: Number = 50;
    imageMargin: Number = 2; 
    showImage: boolean = false;
    listFilter: string;
    products : IProduct[]; 
  
    //methods are defines after all the properties are defined
    constructor(private _productService: ProductService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }   

    //OnInit is a lifecycle hook which provides a place to perform any componenet initialisation
    ngOnInit(): void{
        this.products = this._productService.getProducts();
    }

}