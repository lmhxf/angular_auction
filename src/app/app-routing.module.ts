import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code404Component} from './code404/code404.component';
import { HomeComponent} from './home/home.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  // {path:'', component: ''}
  // 当访问空路由会重定向至home，
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent}
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  //当页面不存在时，展示404页面，需放在最后一个配置
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
