import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import  { ProductListComponent} from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])

export class AppComponent{
    pageTitle: string = 'Acme Product Management'
}


