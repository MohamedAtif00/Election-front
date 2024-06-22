import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './features/user/user.component';

const routes: Routes = [
    {path:'',loadChildren:()=>import('./features/user/user.module').then(x =>x.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
