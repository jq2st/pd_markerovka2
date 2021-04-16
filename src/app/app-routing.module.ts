import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MethOnePageComponent } from './meth-one-page/meth-one-page.component';
import { MethTwoPageComponent } from './meth-two-page/meth-two-page.component';
import { MethThreePageComponent } from './meth-three-page/meth-three-page.component';
import { MethFourPageComponent } from './meth-four-page/meth-four-page.component';
import { MethFivePageComponent } from './meth-five-page/meth-five-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Authguard } from './services/auth.guard';
import { CheckimgPageComponent } from './checkimg-page/checkimg-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'reg', component: RegPageComponent},
  {path: 'check', component: CheckimgPageComponent},
  {path: 'history', component: HistoryPageComponent, canActivate: [Authguard]},
  {path: 'methone', component: MethOnePageComponent, canActivate: [Authguard]},
  {path: 'methtwo', component: MethTwoPageComponent, canActivate: [Authguard]},
  {path: 'meththree', component: MethThreePageComponent, canActivate: [Authguard]},
  {path: 'methfour', component: MethFourPageComponent, canActivate: [Authguard]},
  {path: 'methfive', component: MethFivePageComponent, canActivate: [Authguard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
