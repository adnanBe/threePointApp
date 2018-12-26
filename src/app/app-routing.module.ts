import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthGuardService} from './services/auth-guard.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { AccountComponent } from './dashboard/account/account.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { TransferComponent } from './dashboard/transfer/transfer.component';
import { RibComponent } from './dashboard/rib/rib.component';
import { BankCardComponent } from './dashboard/bank-card/bank-card.component';
import { CheckAndCashComponent } from './dashboard/check-and-cash/check-and-cash.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent, pathMatch: 'full'},
  {path: 'resetpwd', component: ResetPasswordComponent, pathMatch: 'full'},
  {path: 'dashboard', canActivate: [AuthGuardService] , component: DashboardComponent, children: [
    {path: 'default', component: DefaultComponent},
    {path: 'account', component: AccountComponent},
    {path: 'document', component: DocumentComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'rib', component: RibComponent},
    {path: 'card', component: BankCardComponent},
    {path: 'check', component: CheckAndCashComponent},
  ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
