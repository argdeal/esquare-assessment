import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistPageComponent } from './wishlist/wishlist-page/wishlist-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { SearchComponent } from './search/search-components/search/search.component';
import { ListComponent } from './search/search-components/list/list.component';
import { PagingComponent } from './search/search-components/paging/paging.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { ListItemComponent } from './search/search-components/list-item/list-item.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistPageComponent,
    SearchPageComponent,
    LoginPageComponent,
    SearchComponent,
    ListComponent,
    PagingComponent,
    SiteLayoutComponent,
    AuthLayoutComponent,
    PageNotFoundComponent,
    ListItemComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule { }
