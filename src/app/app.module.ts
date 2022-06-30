import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { HealthAndHappinessPageComponent } from './pages/health-and-happiness-page/health-and-happiness-page.component';
import { YourRightsPageComponent } from './pages/your-rights-page/your-rights-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './pages/products-page/product-list/product-list.component';
import { ProductCardComponent } from './pages/products-page/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    NewsPageComponent,
    HealthAndHappinessPageComponent,
    YourRightsPageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
