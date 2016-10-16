import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
    //selector property is required only if u want to nest this in another component
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle: string = 'Product Detail';

    constructor(private _routeParams: RouteParams, private _router: Router){
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void{
        this._router.navigate(['Products']);
    }
}


