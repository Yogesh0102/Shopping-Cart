import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
export const MAIN_ROUTES : Routes = [
    {
        path : '',
        redirectTo: 'login',
        pathMatch: 'full',

    },
    {
        path: 'login',
        component: LoginComponent
    },
 {   
     path: 'home',
    component: HomePageComponent
 },
 {
     path: 'cart',
     component: UserCartComponent
 }
 ,
 {
     path: 'product-list',
     component: ProductListComponent
 }
 ,
 {
     path: 'product-details',
     component: ProductDetailsComponent
 }
 ,
 {
     path: 'sign-up',
     component: SignUpComponent
 },
 {
    path: 'user-cart',
    component: UserCartComponent
},

{
    path: 'edit-profile',
    component: EditProfileComponent
},
{
    path: 'add-product',
    component: AddProductComponent
},
{
    path: 'edit-product',
    component: EditProductComponent
},
{
    path: 'profile',
    component: ProfileComponent
}
 
];