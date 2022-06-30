import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthAndHappinessPageComponent } from './pages/health-and-happiness-page/health-and-happiness-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { YourRightsPageComponent } from './pages/your-rights-page/your-rights-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'your-rights', component: YourRightsPageComponent},
  {path: 'health-happiness', component: HealthAndHappinessPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
