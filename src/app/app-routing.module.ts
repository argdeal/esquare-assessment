import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { WishlistPageComponent } from './wishlist/wishlist-page/wishlist-page.component';
import { AuthGuard } from './authentication/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent }
    ] 
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'wishlist', component: WishlistPageComponent}
    ] 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
