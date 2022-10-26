import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonPageFoundComponent } from './non-page-found/non-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [

  { path: '**', component: NonPageFoundComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
