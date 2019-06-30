import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './todo/list.component';
import { DisplayCountComponent } from './todo/displaycount.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: 'dashboard',
        component: DisplayCountComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
