import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';


const routesOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
}

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
                        { path: 'home', component: HomeComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'shop', component: ShopComponent },
                        { path: '**', redirectTo: '/home', pathMatch: 'full' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
