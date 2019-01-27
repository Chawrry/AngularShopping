import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { PagePipe } from './page.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PagesComponent,
    SearchComponent,
    ShoppingCarComponent,
    PagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
