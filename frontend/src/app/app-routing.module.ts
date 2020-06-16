import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout.component';


const routes: Routes = [
  {
    component: MainLayoutComponent,
    loadChildren: () => import('./auth/auth.module')
      .then((m) => m.AuthModule),
    path: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
